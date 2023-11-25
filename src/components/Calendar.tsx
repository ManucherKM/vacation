import type { BadgeProps, CalendarProps } from 'antd'
import { Calendar as AntdCalendar, Badge } from 'antd'
import type { Dayjs } from 'dayjs'

const getListData = (value: Dayjs) => {
	let listData
	switch (value.date()) {
		case 8:
			listData = [
				{ type: 'warning', content: 'Иванов Иван Иванович 1' },
				{ type: 'success', content: 'Иванов Иван Иванович 2' },
			]
			break
		case 10:
			listData = [
				{ type: 'warning', content: 'Иванов Иван Иванович 3' },
				{ type: 'success', content: 'Иванов Иван Иванович 4' },
				{ type: 'error', content: 'Иванов Иван Иванович 5' },
			]
			break
		case 15:
			listData = [
				{ type: 'warning', content: 'Иванов Иван Иванович 6' },
				{ type: 'success', content: 'Иванов Иван Иванович 7' },
				{ type: 'error', content: 'Иванов Иван Иванович 8' },
				{ type: 'error', content: 'Иванов Иван Иванович 9' },
				{ type: 'error', content: 'Иванов Иван Иванович 10' },
				{ type: 'error', content: 'Иванов Иван Иванович 11' },
			]
			break
		default:
	}
	return listData || []
}

const getMonthData = (value: Dayjs) => {
	if (value.month() === 8) {
		return 1394
	}
}

export const Calendar = () => {
	const monthCellRender = (value: Dayjs) => {
		const num = getMonthData(value)
		return num ? (
			<div className="notes-month">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null
	}

	const dateCellRender = (value: Dayjs) => {
		const listData = getListData(value)
		return (
			<ul className="events">
				{listData.map(item => (
					<li key={item.content}>
						<Badge
							status={item.type as BadgeProps['status']}
							text={item.content}
						/>
					</li>
				))}
			</ul>
		)
	}

	const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
		if (info.type === 'date') return dateCellRender(current)
		if (info.type === 'month') return monthCellRender(current)
		return info.originNode
	}
	return (
		<>
			<AntdCalendar cellRender={cellRender} />
		</>
	)
}
