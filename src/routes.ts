import { RouteProps } from 'react-router-dom'
import { TopPage } from './pages'
import { HomePage } from './pages/home'
import { AchievementPage } from './pages/achievement'
import { HistoryPage } from './pages/history'
import { MyPage } from './pages/my'

export const routes = [
  {
    path: '/',
    Component: TopPage,
  },
  {
    path: '/home',
    Component: HomePage,
  },
  {
    path: '/achievement',
    Component: AchievementPage,
  },
  {
    path: '/history',
    Component: HistoryPage,
  },
  {
    path: '/my',
    Component: MyPage,
  },
] as const satisfies RouteProps[]
