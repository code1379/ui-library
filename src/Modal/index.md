# Modal

This is an Modal example. <https://juejin.cn/post/6844903683197501447#heading-11>

```jsx
import { Modal } from 'ui-library';
import {useState} from 'react'
export default () => {
  const [visible, setVisible] = useState(false)

  const handleShow = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  const onConfirm = () => {
    setVisible(false)
  }
  return <>
    <button onClick={handleShow}>show</button>
    <Modal visible={visible} onClose={onClose} onConfirm={onConfirm} title="title" content="content"/>
  </>
}
```
