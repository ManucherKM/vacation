import { useStore } from '@/storage'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { AppRouter } from '..'
import { AppNotifications } from '../AppNotifications/AppNotifications'
import classes from './App.module.scss'

export const App = () => {
	const isLoading = useStore(store => store.isLoading)

	return (
		<>
			{isLoading ? (
				<div className={classes.loader}>
					<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
				</div>
			) : (
				<>
					<AppNotifications />
					<AppRouter />
				</>
			)}
		</>
	)
}
