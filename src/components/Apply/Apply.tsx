import { useAuthStore, useNotificationsStore, useStore } from '@/storage'
import { Button, Checkbox, DatePicker, Input } from 'antd'
import { ChangeEvent, useState } from 'react'
import classes from './Apply.module.scss'

export const Apply = () => {
	const [dates, setDates] = useState<string[]>([])
	const [conditions, setConditions] = useState<string>('')
	const setLoading = useStore(store => store.setLoading)
	const newMessage = useNotificationsStore(store => store.newMessage)
	const newError = useNotificationsStore(store => store.newError)
	const addApplication = useStore(store => store.addApplication)
	const token = useAuthStore(store => store.token)

	const [pay, setPay] = useState(false)

	function dateChangeHandler(f: [string, string]) {
		setDates(f)
	}

	function checkboxHandler() {
		setPay(prev => !prev)
	}

	function conditionsHandler(e: ChangeEvent<HTMLTextAreaElement>) {
		setConditions(e.target.value)
	}

	async function submitHandler() {
		if (!dates.length) {
			return
		}

		if (!dates[0].length) {
			return
		}

		if (!dates[1].length) {
			return
		}

		setLoading(true)

		const isSuccess = await addApplication({
			date_start: dates[0],
			date_end: dates[1],
			auth_token: token || '',
			payments: pay ? '1' : '0',
			benefit: conditions,
		})

		if (!isSuccess) {
			setLoading(false)
			newError('Не удалось отправить заявку')
			return
		}

		setLoading(false)
		newMessage('Заявка отправлена')
	}

	return (
		<div className={classes.root}>
			<DatePicker.RangePicker
				onChange={(_, f) => dateChangeHandler(f)}
				placeholder={['Начало отпуска', 'Конец отпуска']}
				style={{ width: '100%' }}
			/>
			<Checkbox value={pay} onChange={checkboxHandler}>
				Включить выплату по льготному отпуску
			</Checkbox>
			<Input.TextArea
				onChange={conditionsHandler}
				value={conditions}
				rows={4}
				placeholder="Условия льготного отпуска"
			/>
			<Button type="primary" onClick={submitHandler}>
				Отправить
			</Button>
		</div>
	)
}
