import { history } from '@/configuration/history'
import { ERoutes } from '@/configuration/routes'
import { useAuthStore } from '@/storage'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import classes from './NavBar.module.scss'

export const NavBar = () => {
	const isAuth = useAuthStore(store => !!store.token)
	const logout = useAuthStore(store => store.logout)
	const navigate = useNavigate()

	function logoutHandler() {
		logout()
		navigate(ERoutes.home)
	}

	return (
		<div className={classes.root}>
			<nav>
				<div>
					<Link to={ERoutes.home}>
						<svg
							width="34"
							height="34"
							viewBox="0 0 34 34"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="34" height="34" rx="17" fill="#1677FF" />
							<rect x="1" y="1" width="32" height="32" rx="16" fill="white" />
							<path
								d="M13.746 11.432L17.554 21L16.674 20.824L20.29 11.432H22.098L16.994 23.528L11.906 11.432H13.746Z"
								fill="#1677FF"
							/>
						</svg>
					</Link>
				</div>
				{!isAuth ? (
					<div className={classes.auth}>
						<Button onClick={() => history.push(ERoutes.login)}>Вход</Button>
						<Button
							type="primary"
							onClick={() => history.push(ERoutes.registration)}
						>
							Регистрация
						</Button>
					</div>
				) : (
					<Button type="primary" onClick={logoutHandler}>
						Выход
					</Button>
				)}
			</nav>
		</div>
	)
}
