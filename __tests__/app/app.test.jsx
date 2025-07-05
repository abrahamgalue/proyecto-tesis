import { renderRouter, screen } from 'expo-router/testing-library'
import { View } from 'react-native'

const MockComponent = jest.fn(() => <View />)

const ROUTE_MAPPING = {
	index: MockComponent,
	'+not-found': MockComponent,
	'/sign-in': MockComponent,
	'(protected)/index': MockComponent,
	'(protected)/modal': MockComponent,
	'(protected)/settings': MockComponent,
	'(protected)/settings/about': MockComponent,
	'(protected)/settings/notifications': MockComponent,
	'(protected)/control': MockComponent,
	'(protected)/control/edit/1': MockComponent,
	'(protected)/account': MockComponent,
	'(protected)/account/edit/1': MockComponent
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

it('(protected)/settings/about', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/settings/about'
	})

	expect(screen).toHavePathname('/settings/about')
})

it('(protected)/settings/notifications', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/settings/notifications'
	})

	expect(screen).toHavePathname('/settings/notifications')
})

it('(protected)/control', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/control'
	})

	expect(screen).toHavePathname('/control')
})

it('(protected)/control/edit/1', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/control/edit/1'
	})

	expect(screen).toHavePathname('/control/edit/1')
})

it('(protected)/account', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/account'
	})

	expect(screen).toHavePathname('/account')
})

it('(protected)/account/edit/1', async () => {
	renderRouter(ROUTE_MAPPING, {
		initialUrl: '/(protected)/account/edit/1'
	})

	expect(screen).toHavePathname('/account/edit/1')
})
