import axios from '@/configuration/axios'
import { useAuthStore, useNotificationsStore, useStore } from '@/storage'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import { AlertApply, List } from '..'
import classes from './Applications.module.scss'

export const Applications = () => {
	const applications = useStore(store => store.applications)
	const getApplications = useStore(store => store.getApplications)
	const newError = useNotificationsStore(store => store.newError)
	const token = useAuthStore(store => store.token)
	const [isLoading, setIsLoading] = useState(false)

	async function rejectApplication(id: string) {
		setIsLoading(true)
		const isSuccess = await axios.post('/api/req_conf', {
			id,
			auth_token: token,
			config: false,
		})
		setIsLoading(false)

		if (!isSuccess) {
			newError('Не удалось изменить заявку.')
		}

		getApplications()
	}

	async function configrmApplication(id: string) {
		setIsLoading(true)
		const isSuccess = await axios.post('/api/req_conf', {
			id,
			auth_token: token,
			config: true,
		})

		setIsLoading(false)

		if (!isSuccess) {
			newError('Не удалось изменить заявку.')
		}

		getApplications()
	}

	useEffect(() => {
		setIsLoading(true)
		getApplications().finally(() => setIsLoading(false))
	}, [])
	return (
		<div className={classes.root}>
			{isLoading ? (
				<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
			) : (
				<>
					<h2>
						{applications.length === 0
							? 'Не удалось найти заявки'
							: 'Заявки для рассмотрения'}{' '}
					</h2>

					<List
						arr={applications}
						callback={props => (
							<AlertApply
								key={props.id}
								name={props.name}
								message={props.message}
								onConfirm={() => configrmApplication(props.id)}
								onReject={() => rejectApplication(props.id)}
							/>
						)}
					/>
				</>
			)}
		</div>
	)
}
