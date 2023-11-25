import { useAuthStore, useNotificationsStore } from '@/storage'
import { validateEmail, validatePassword } from '@/utils'
import { Button, Input } from 'antd'
import { ChangeEvent, useEffect, useState } from 'react'
import { Title } from '../Title/Title'
import classes from './FormLogin.module.scss'

export const FormLogin = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false)
	const login = useAuthStore(store => store.login)
	const newError = useNotificationsStore(store => store.newError)
	const newMessage = useNotificationsStore(store => store.newMessage)

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

		const isSuccess = await login({ email, password })

		if (!isSuccess) {
			newError('Неверный логин или пароль.')
			return
		}

		newMessage('Пользователь авторизован.')
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
			<Title className={classes.title}>Авторизация</Title>
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
			</div>
		</form>
	)
}
