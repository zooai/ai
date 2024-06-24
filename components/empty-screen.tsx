import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: "What's new with ZooAI?",
    message: "What's new with ZooAI?"
  },
  {
    heading: 'Why is ZooAI growing rapidly?',
    message: 'Why is ZooAI growing rapidly?'
  },
  {
    heading: 'How does the ZooAI work?',
    message: 'How does the ZooAI SDK work?'
  },
  {
    heading: 'ZooAI vs other AI ChatBot',
    message: 'ZooAI vs other AI ChatBot'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className=" bg-transparent text-muted p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
