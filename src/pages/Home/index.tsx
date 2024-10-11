import { Button } from '@/components/ui/button'
import i18next from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Button
        onClick={() => {
          i18next.changeLanguage(i18next.language === 'zh' ? 'en' : 'zh')
        }}
      >
        Toggle Language
      </Button>
      <div>{t('hello')}</div>
      <div className="text-red-700">
        {count}
      </div>
      <Button onClick={() => {
        setCount(count + 1)
      }}
      >
        Count ++
      </Button>
    </div>
  )
}

export default Home
