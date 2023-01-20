import React, { useState } from 'react'

import styles from './Icon.module.css'

import Image from 'next/image'

type Props = {
  icon: string
  title: string
};

export default function Icon({ icon, title }: Props) {
  const [clientXOnStart, setClientXOnStart] = useState(0)
  const [clientYOnStart, setClientYOnStart] = useState(0)
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)
  const [selected, setSelected] = useState(false)

  const moveIcon = (event: React.DragEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement

    setSelected(true)
    event.preventDefault()

    setPositionX(event.clientX - clientXOnStart)
    setPositionY(event.clientY - clientYOnStart)

    target.style.zIndex = `1`
    target.style.transform = `translate(${positionX}px, ${positionY}px)`

    getStartPosition(event)
  }

  const getStartPosition = (event: React.DragEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement

    setClientXOnStart(target.offsetLeft + target.offsetWidth / 2)
    setClientYOnStart(target.offsetTop + target.offsetHeight / 2)
  }

  const onDragStart: React.DragEventHandler<HTMLButtonElement> = (event) => {
    getStartPosition(event)
  }

  const onDragOver: React.DragEventHandler<HTMLButtonElement> = (event) => {
    moveIcon(event)
  }

  const onDragEnd: React.DragEventHandler<HTMLButtonElement> = (event) => {
    const target = event.target as HTMLButtonElement

    target.style.zIndex = `0`

    setSelected(false)
  }

  return (
    <button
      draggable
      className={styles.button + (selected ? ` ${styles.selected}` : '')}
      onLoad={onDragStart}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <figure className={styles.figure}>
        <Image className={styles.image} src={icon} width="50" height="51" alt="My Computer" />
        <figcaption className={styles.figcaption}>{title}</figcaption>
      </figure>
    </button>
  );
}
