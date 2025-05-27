import { renderRouter, screen } from 'expo-router/testing-library'
import { View } from 'react-native'

it('index', async () => {
	const MockComponent = jest.fn(() => <View />)

	renderRouter(
		{
			index: MockComponent,
			'(app)/sign-in': MockComponent,
			'(app)/modal': MockComponent,
			'(app)/+not-found': MockComponent,
			'(protected)/index': MockComponent,
			'(protected)/settings': MockComponent
		},
		{
			initialUrl: '/'
		}
	)

	expect(screen).toHavePathname('/')
})

it('sign-in', async () => {
	const MockComponent = jest.fn(() => <View />)

	renderRouter(
		{
			index: MockComponent,
			'(app)/sign-in': MockComponent,
			'(app)/modal': MockComponent,
			'(app)/+not-found': MockComponent,
			'(protected)/index': MockComponent,
			'(protected)/settings': MockComponent
		},
		{
			initialUrl: '/(app)/sign-in'
		}
	)

	expect(screen).toHavePathname('/sign-in')
})

it('modal', async () => {
	const MockComponent = jest.fn(() => <View />)

	renderRouter(
		{
			index: MockComponent,
			'(app)/sign-in': MockComponent,
			'(app)/modal': MockComponent,
			'(app)/+not-found': MockComponent,
			'(protected)/index': MockComponent,
			'(protected)/settings': MockComponent
		},
		{
			initialUrl: '/(app)/modal'
		}
	)

	expect(screen).toHavePathname('/modal')
})

it('+not-found', async () => {
	const MockComponent = jest.fn(() => <View />)

	renderRouter(
		{
			index: MockComponent,
			'(app)/sign-in': MockComponent,
			'(app)/modal': MockComponent,
			'(app)/+not-found': MockComponent,
			'(protected)/index': MockComponent,
			'(protected)/settings': MockComponent
		},
		{
			initialUrl: '/(app)/+not-found'
		}
	)

	expect(screen).toHavePathname('/(app)/+not-found')
})

it('(protected)/index', async () => {
	const MockComponent = jest.fn(() => <View />)

	renderRouter(
		{
			index: MockComponent,
			'(app)/sign-in': MockComponent,
			'(app)/modal': MockComponent,
			'(app)/+not-found': MockComponent,
			'(protected)/index': MockComponent,
			'(protected)/settings': MockComponent
		},
		{
			initialUrl: '/(protected)/index'
		}
	)

	expect(screen).toHavePathname('/(protected)/index')
})

it('settings', async () => {
	const MockComponent = jest.fn(() => <View />)

	renderRouter(
		{
			index: MockComponent,
			'(app)/sign-in': MockComponent,
			'(app)/modal': MockComponent,
			'(app)/+not-found': MockComponent,
			'(protected)/index': MockComponent,
			'(protected)/settings': MockComponent
		},
		{
			initialUrl: '/(protected)/settings'
		}
	)

	expect(screen).toHavePathname('/settings')
})
