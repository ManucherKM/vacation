import { ERoutes } from '@/configuration/routes'
import { useAuthStore, useNotificationsStore, useStore } from '@/storage'
import { validateEmail, validatePassword } from '@/utils'
import { Button, Input } from 'antd'
import { ChangeEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../Title/Title'
import classes from './FormRegistration.module.scss'

export const FormRegistration = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false)
	const registration = useAuthStore(store => store.registration)
	const newError = useNotificationsStore(store => store.newError)
	const newMessage = useNotificationsStore(store => store.newMessage)
	const setLoading = useStore(store => store.setLoading)

	function emailChangeHandler(e: ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value)
	}

	function passwordChangeHandler(e: ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}

	async function submitHandler() {
		if (!isEmailValid || !isPasswordValid) {
			return
		}

		setLoading(true)

		const isSuccess = await registration({ email, password })

		setLoading(false)

		if (!isSuccess) {
			newError('Не удалось создать пользователя')
			return
		}

		newMessage('Пользователь создан.')
	}

	useEffect(() => {
		const isValid = validateEmail(email)

		setIsEmailValid(isValid)
	}, [email])

	useEffect(() => {
		const isValid = validatePassword(password)

		setIsPasswordValid(isValid)
	}, [password])

	return (
		<form onSubmit={submitHandler} className={classes.root}>
			<Title className={classes.title}>Регистрация</Title>
			<div className={classes.body}>
				<Input
					value={email}
					onChange={emailChangeHandler}
					size="middle"
					placeholder="email"
					status={!isEmailValid && email.length !== 0 ? 'error' : ''}
				/>
				<Input.Password
					value={password}
					onChange={passwordChangeHandler}
					placeholder="password"
					status={!isPasswordValid && password.length !== 0 ? 'error' : ''}
				/>
				<Button
					type="primary"
					onClick={submitHandler}
					disabled={!isEmailValid || !isPasswordValid}
				>
					Отправить
				</Button>

				<p className={classes.subtitle}>
					Уже есть аккаунт? <Link to={ERoutes.login}>Авторизуйтесь</Link>
				</p>
			</div>
		</form>
	)
}
