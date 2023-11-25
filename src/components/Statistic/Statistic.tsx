import { Doughnut } from 'react-chartjs-2'

export const Statistic = () => {
	const data = {
		labels: ['Отказ', 'В обработке', 'Одобрено'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3],
				backgroundColor: ['#ff4d4f', '#ffa940', '#bae637'],
				borderWidth: 1,
			},
		],
	}
	return (
		<div>
			<h2>Статистика</h2>
			<Doughnut
				data={data}
				options={{
					aspectRatio: 3,
				}}
			/>
		</div>
	)
}
