import { createState, useState } from '@hookstate/core'

const initialState = {
  authenticated: false,
}

const appState = createState(initialState)

export const useAppState = () => useState(appState)

export const useAppValue = () => useState(appState).get()

export const getAppValue = appState.get

export const setAppValue = appState.set

export const resetAppValue = () => appState.set(initialState)

export default appState
