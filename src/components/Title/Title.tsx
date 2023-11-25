import { FC, HTMLAttributes } from 'react'
import classes from './Title.module.scss'

export interface ITitle extends HTMLAttributes<HTMLHeadingElement> {}

export const Title: FC<ITitle> = ({ children, className, ...props }) => {
	const styles = [classes.root, className].join(' ')

	return (
		<h1 className={styles} {...props}>
			{children}
		</h1>
	)
}
