import { renderRouter, screen } from 'expo-router/testing-library'
import { View } from 'react-native'

const MockComponent = jest.fn(() => <View />)

const ROUTE_MAPPING = {
	index: MockComponent,
	'(app)/sign-in': MockComponent,
	'(app)/modal': MockComponent,
	'(app)/+not-found': MockComponent,
	'(protected)/index': MockComponent,
	'(protected)/settings': MockComponent
}

it('index', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/'
	})

	expect(screen).toHavePathname('/')
})

it('sign-in', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(app)/sign-in'
	})

	expect(screen).toHavePathname('/sign-in')
})

it('modal', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(app)/modal'
	})

	expect(screen).toHavePathname('/modal')
})

it('+not-found', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(app)/+not-found'
	})

	expect(screen).toHavePathname('/(app)/+not-found')
})

it('(protected)/index', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/index'
	})

	expect(screen).toHavePathname('/(protected)/index')
})

it('settings', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/settings'
	})

	expect(screen).toHavePathname('/settings')
})
