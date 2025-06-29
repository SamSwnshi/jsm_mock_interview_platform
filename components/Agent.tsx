import Image from 'next/image'
import React from 'react'

enum CallStatus{
  INACTIVE = "INACTIVE",
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED'
}
const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.FINISHED
  const isSpeaking = true;
  return (
    <>
      <div className='call-view'>
        <div className='card-interviewer'>
          <Image src='/ai-avatar.png' alt='vapi' width={65} height={54} className='object-cover' />
          {isSpeaking && <span className='animate-speak' />}
          <h3>AI Interview</h3>
        </div>
        <div className='card-border'>
          <div className="card-content">
            <Image src='/user-avatar.png' alt='user avatar' width={540} height={540} className='object-cover rounded-full size-[120px]' />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {callStatus !== "ACTIVE" ? (
          <button>
            <span>
              {callStatus === "INACTIVE" || callStatus === "FINISHED" ? "Call" : ". . ."}
            </span>
          </button>
        ) : (
          <button className='btn-disconnect'>END</button>
        )}
      </div>
    </>
  )
}

export default Agent
