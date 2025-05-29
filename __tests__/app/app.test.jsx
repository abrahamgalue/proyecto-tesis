import { renderRouter, screen } from 'expo-router/testing-library'
import { View } from 'react-native'

const MockComponent = jest.fn(() => <View />)

const ROUTE_MAPPING = {
	index: MockComponent,
	'+not-found': MockComponent,
	'/sign-in': MockComponent,
	'(protected)/index': MockComponent,
	'(protected)/modal': MockComponent,
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
		initialUrl: '/sign-in'
	})

	expect(screen).toHavePathname('/sign-in')
})

it('+not-found', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '+not-found'
	})

	expect(screen).toHavePathname('/+not-found')
})

it('(protected)/index', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/index'
	})

	expect(screen).toHavePathname('/(protected)/index')
})

it('(protected)/modal', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '(protected)/modal'
	})

	expect(screen).toHavePathname('/modal')
})

it('(protected)/settings', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/settings'
	})

	expect(screen).toHavePathname('/settings')
})
