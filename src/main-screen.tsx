import { Button } from "./components/ui/button"
import logo from './assets/logo-small.png'
import { Star, Settings, ThumbsDown, ThumbsUp, CircleHelpIcon } from 'lucide-react'
import { useState } from "react"
import ReviewScreen from "./components/component/review"
import Chat from "./components/component/chat"

export function MainScreen() {
  const [showReview, setShowReview] = useState(false)
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-2 px-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-primary-foreground">
            <div className="w-5 h-5 flex items-center">
              <Settings />
            </div>
            <span className="sr-only">New Chat</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground">
            <div className="w-5 h-5 flex items-center">
              <Star
                onClick={() => setShowReview(!showReview)}
              />
            </div>
            <span className="sr-only">Chat History</span>
          </Button>
        </div>
        <div>
          <img src={logo} alt="Frank logo" className="h-8" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" disabled size="icon" className="text-primary-foreground">
            <div className="w-5 h-5 flex items-center">
            </div>
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground">
            <div className="w-5 h-5 flex items-center">
              <CircleHelpIcon />
            </div>
            <span className="sr-only">Help</span>
          </Button>
        </div>
      </header>
      {!showReview ? (<Chat />) : (<ReviewScreen />) }
    </div>
  )
}