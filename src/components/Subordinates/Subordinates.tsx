/* eslint-disable */

import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import classes from './Subordinates.module.scss'
// import testData from './TestData'

import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	ChartOptions,
	Legend,
	LinearScale,
	TimeScale,
	Title,
	Tooltip,
	TooltipPositionerMap,
} from 'chart.js'

import { useStore } from '@/storage'
import 'chartjs-adapter-date-fns'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Bar } from 'react-chartjs-2'
import { Event } from './TestData'

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartDataLabels,
	TimeScale,
)

export const Subordinates = () => {
	const [testData, setTestData] = useState<Event[]>([])
	const vacations = useStore(store => store.vacations)
	const getVacationList = useStore(store => store.getVacationList)

	interface CustomTooltip extends TooltipPositionerMap {
		custom: any
	}

	;(Tooltip.positioners as CustomTooltip).custom = (
		elements: any,
		eventPosition: any,
	) => {
		return {
			x: eventPosition.x,
			y: eventPosition.y,
		}
	}

	interface StackData {
		Stack: string
		LastDate: Date
	}

	const labels = [...new Set(testData.map(event => event.EventSource))]

	const eventNames = [...new Set(testData.map(event => event.EventName))]
	const eventColors = eventNames
		.map((val, i) => {
			var color = `hsl(${
				(i * (360 / (eventNames.length || 1))) % 360
			},100%,50%, 1)`
			return color
		})
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)

	const labelGrouping: StackData[][] = []

	const sortedData = testData.sort(
		(a, b) => a.Start.getTime() - b.Start.getTime(),
	)

	const datasets = sortedData.map(event => {
		let start = event.Start.getTime()
		let end = event.End.getTime()

		let stack: StackData | undefined = undefined
		let firstStackEntry: boolean = false

		if (labelGrouping[event.EventSource as unknown as number] === undefined) {
			stack = { Stack: 'Stack0', LastDate: event.End }
			labelGrouping[event.EventSource as unknown as number] = [stack]
			firstStackEntry = true
		} else {
			labelGrouping[event.EventSource as unknown as number].forEach(item => {
				if (
					stack === undefined &&
					item.LastDate.getTime() <= event.Start.getTime()
				) {
					stack = { ...item }
					item.LastDate = event.End
				}
			})
			if (stack === undefined) {
				const stackIndex =
					labelGrouping[event.EventSource as unknown as number].length
				stack = { Stack: 'Stack' + stackIndex, LastDate: event.End }
				labelGrouping[event.EventSource as unknown as number].push(stack)
				firstStackEntry = true
			}
		}

		let data: any[] = labels.map(() => null)

		if (!firstStackEntry) {
			start -= stack.LastDate.getTime()
			end -= stack.LastDate.getTime()
		}

		data[labels.indexOf(event.EventSource)] = [
			start,
			end,
			format(event.Start, 'yyyy-MM-dd') +
				' - ' +
				format(event.End, 'yyyy-MM-dd'),
		]

		return {
			label: event.EventName,
			data: data,
			skipNull: true,
			backgroundColor: eventColors[eventNames.indexOf(event.EventName)],
			stack: event.EventSource + '_' + stack.Stack,
			datalabels: {
				formatter: () => event.EventName,
			},
		}
	})

	const data = {
		labels,
		datasets: datasets,
	}

	const options: ChartOptions<'bar'> = {
		indexAxis: 'y' as const,
		aspectRatio: 2,
		plugins: {
			tooltip: {
				callbacks: {
					title: () => '',
					afterBody: items =>
						data.datasets[items[0].datasetIndex].data[items[0].dataIndex][2],
					label: item => data.datasets[item.datasetIndex].label,
				},
				position: 'custom' as 'average',
			},
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: 'Timeline',
			},
			datalabels: {
				color: 'black',
				anchor: 'start',
				align: 'right',
				display: context => {
					return context.dataset.data[context.dataIndex] !== null
						? 'auto'
						: false
				},
				font: function (context) {
					var width = context.chart.width
					var size = width / 100
					return {
						weight: 'bold',
						size: size,
					}
				},
			},
		},
		resizeDelay: 20,
		responsive: true,
		scales: {
			x: {
				min: Math.min(...testData.map(event => event.Start.getTime())),
				max: Math.max(...testData.map(event => event.End.getTime())),
				ticks: {
					autoSkip: true,
					maxTicksLimit: 10,
				},
				type: 'time',
				time: {
					displayFormats: {
						millisecond: 'yyyy-MM-dd',
						second: 'yyyy-MM-dd',
						minute: 'yyyy-MM-dd',
						hour: 'yyyy-MM-dd',
						day: 'yyyy-MM-dd',
						week: 'yyyy-MM-dd',
						month: 'yyyy-MM-dd',
						quarter: 'yyyy-MM-dd',
						year: 'yyyy-MM-dd',
					},
					unit: 'month',
				},
				adapters: {
					date: {
						locale: de,
					},
				},
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
	}

	useEffect(() => {
		getVacationList()
	}, [])

	useEffect(() => {
		setTestData(vacations)
	}, [vacations])

	return (
		<div className={classes.root}>
			<Bar options={options} data={data} />
		</div>
	)
}
