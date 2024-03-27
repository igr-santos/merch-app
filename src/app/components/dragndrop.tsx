'use client'

import { useCallback, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Container } from './container'


export default function DragAndDrop() {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
    const toggle = useCallback(
      () => setHideSourceOnDrag(!hideSourceOnDrag),
      [hideSourceOnDrag],
    )


    return (
        <DndProvider backend={HTML5Backend}>
            <Container hideSourceOnDrag={hideSourceOnDrag} />
        </DndProvider>
    )
}