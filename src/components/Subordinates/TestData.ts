class Event {
	EventName: string = ''
	EventSource: string = ''
	Start: Date = new Date()
	End: Date = new Date()
}

const simulateDate = (value: number) => {
	const t = new Date()
	t.setDate(t.getDate() + value)
	return t
}

const data: Event[] = [
	{
		Start: simulateDate(0),
		End: simulateDate(14),
		EventName: 'Иванов',
		EventSource: 'Иванов',
	},
	{
		Start: simulateDate(14),
		End: simulateDate(29),
		EventName: 'Петров',
		EventSource: 'Петров',
	},
	{
		Start: simulateDate(29),
		End: simulateDate(43),
		EventName: 'Сидоров',
		EventSource: 'Сидоров',
	},
	{
		Start: simulateDate(340),
		End: simulateDate(365),
		EventName: 'Сидоров',
		EventSource: 'Сидоров',
	},
	{
		Start: simulateDate(43),
		End: simulateDate(60),
		EventName: 'Захарчук',
		EventSource: 'Захарчук',
	},
	{
		Start: simulateDate(60),
		End: simulateDate(85),
		EventName: 'Панамарев',
		EventSource: 'Панамарев',
	},
	{
		Start: simulateDate(85),
		End: simulateDate(95),
		EventName: 'Моркин',
		EventSource: 'Моркин',
	},
	{
		Start: simulateDate(225),
		End: simulateDate(240),
		EventName: 'Романов',
		EventSource: 'Романов',
	},
	{
		Start: simulateDate(95),
		End: simulateDate(110),
		EventName: 'Романов',
		EventSource: 'Романов',
	},
	{
		Start: simulateDate(110),
		End: simulateDate(125),
		EventName: 'Жуков',
		EventSource: 'Жуков',
	},
	{
		Start: simulateDate(125),
		End: simulateDate(149),
		EventName: 'Фролов',
		EventSource: 'Фролов',
	},
	{
		Start: simulateDate(1),
		End: simulateDate(30),
		EventName: 'Фролов',
		EventSource: 'Фролов',
	},
	{
		Start: simulateDate(149),
		End: simulateDate(160),
		EventName: 'Тарасов',
		EventSource: 'Тарасов',
	},
	{
		Start: simulateDate(160),
		End: simulateDate(185),
		EventName: 'Беляев',
		EventSource: 'Беляев',
	},
	{
		Start: simulateDate(185),
		End: simulateDate(200),
		EventName: 'Михайлов',
		EventSource: 'Михайлов',
	},
	{
		Start: simulateDate(200),
		End: simulateDate(225),
		EventName: 'Селезнев',
		EventSource: 'Селезнев',
	},
	{
		Start: simulateDate(225),
		End: simulateDate(240),
		EventName: 'Макаров',
		EventSource: 'Макаров',
	},
	{
		Start: simulateDate(240),
		End: simulateDate(265),
		EventName: 'Андреев',
		EventSource: 'Андреев',
	},

	{
		Start: simulateDate(265),
		End: simulateDate(280),
		EventName: 'Кузьмин',
		EventSource: 'Кузьмин',
	},

	{
		Start: simulateDate(105),
		End: simulateDate(130),
		EventName: 'Кузьмин',
		EventSource: 'Кузьмин',
	},
	{
		Start: simulateDate(280),
		End: simulateDate(300),
		EventName: 'Мартынов',
		EventSource: 'Мартынов',
	},
	{
		Start: simulateDate(300),
		End: simulateDate(320),
		EventName: 'Абрамов',
		EventSource: 'Абрамов',
	},
	{
		Start: simulateDate(320),
		End: simulateDate(340),
		EventName: 'Горшков',
		EventSource: 'Горшков',
	},
	{
		Start: simulateDate(340),
		End: simulateDate(365),
		EventName: 'Пахомов',
		EventSource: 'Пахомов',
	},
]

export default data
