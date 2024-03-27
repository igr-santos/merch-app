'use client'

import update from 'immutability-helper'
import type { CSSProperties, FC } from 'react'
import { useCallback, useState } from 'react'
import type { XYCoord } from 'react-dnd'
import { useDrop } from 'react-dnd'
import Image from "next/image";

import { Box } from './box';
import { ItemTypes } from './itemtypes'


export interface DragItem {
  type: string
  id: string
  top: number
  left: number
}

const styles: CSSProperties = {
  width: 1200,
  minHeight: '100vh',
  border: '5px dotted purple',
  position: 'relative',
  backgroundColor: 'rgba(0,0,0,.4)'
}

export interface ContainerProps {
  hideSourceOnDrag: boolean
}

export interface ContainerState {
  boxes: { [key: string]: { top: number; left: number; src: string, w: number, h: number } }
}

export const Container: FC<ContainerProps> = ({ hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number
      left: number
      src: string,
      w: number,
      h: number
    }
  }>({
    a: { top: 20, left: 80, src: '/imgs/linguini-drops/tronco-bermuda-bege.png', w: 755, h: 822 },
    b: { top: 180, left: 20, src: '/imgs/linguini-drops/tronco-calca-marron.png', w: 728, h: 779 },
    c: { top: 180, left: 20, src: '/imgs/linguini-drops/tronco-calca-preta.png', w: 1081, h: 788 },
    d: { top: 20, left: 80, src: '/imgs/linguini-drops/bermuda-bege.png', w: 828, h: 662 },
    e: { top: 180, left: 20, src: '/imgs/linguini-drops/calca-marron.png', w: 919, h: 714 },
    f: { top: 180, left: 20, src: '/imgs/linguini-drops/calca-preta.png', w: 682, h: 774 },
  })

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [boxes, setBoxes],
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, src, w, h } = boxes[key] as {
          top: number
          left: number
          src: string,
          w: number,
          h: number
        }
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            
            <Image src={src} alt={src} width={w/4} height={h/4} />
          </Box>
        )
      })}
    </div>
  )
}
