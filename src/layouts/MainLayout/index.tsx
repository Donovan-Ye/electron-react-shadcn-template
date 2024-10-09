import FluentDarkTheme20Filled from '~icons/fluent/dark-theme-20-filled'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div className="dark:bg-black dark:text-white p-1">
      <div className="flex justify-end">
        <FluentDarkTheme20Filled
          className="cursor-pointer"
          onClick={
            () => {
              document.documentElement.classList.toggle('dark')
            }
          }
        />
      </div>

      <Outlet />
    </div>
  )
}

export default MainLayout
