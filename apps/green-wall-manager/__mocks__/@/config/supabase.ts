export const supabase = {
	auth: {
		signInWithPassword: jest.fn(),
		signOut: jest.fn(),
		getSession: jest.fn().mockResolvedValue({
			data: { session: null },
			error: null
		}),
		startAutoRefresh: jest.fn(),
		stopAutoRefresh: jest.fn()
	},
	from: () => ({
		select: jest.fn().mockReturnThis(),
		insert: jest.fn().mockReturnThis(),
		update: jest.fn().mockReturnThis(),
		delete: jest.fn().mockReturnThis(),
		eq: jest.fn().mockReturnThis(),
		lt: jest.fn().mockReturnThis(),
		order: jest.fn().mockReturnThis(),
		single: jest.fn().mockReturnThis()
	})
}
