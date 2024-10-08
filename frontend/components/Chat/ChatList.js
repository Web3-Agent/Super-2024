
// import { Separator } from '@/app/_components/ui/separator'
import { ChatMessage } from './ChatMessage'



export function ChatList({ messages }) {
    // Remove system messages and funciton returns from the list
    messages = messages.filter((message) => message.role !== 'system' && message.role !== 'function')
    if (!messages.length) {
        return null
    }

    return (
        <div className="relative mx-auto max-w-2xl px-4">
            {messages.map((message, index) => (
                <div key={index}>
                    <ChatMessage message={message} />
                    {/* {index < messages.length - 1 && (
                        <Separator className="my-4 md:my-8" />
                    )} */}
                </div>
            ))}
        </div>
    )
}
