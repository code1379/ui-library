import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './index.less';

/**
 * 1. 标题
 * 2. 内容区
 * 3. 操作区
 * 4. mask 遮罩
 * @returns Modal
 */
interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  title?: string;
  content?: React.ReactNode | string;
}
export default function Modal(props: ModalProps) {
  const { visible: pVisible, onClose, title, content, onConfirm } = props;

  const [visible, setVisible] = useState(pVisible);

  useEffect(() => {
    setVisible(pVisible);
  }, [pVisible]);

  const handleCancel = () => {
    setVisible(false);
    onClose?.();
  };

  const handleConfirm = () => {
    setVisible(false);
    onConfirm?.();
  };

  const handleMaskClick = () => {
    setVisible(false);
    onClose?.();
  };

  const modalRef = useRef(null);
  // if (!visible) return null;

  return ReactDOM.createPortal(
    <>
      <CSSTransition
        in={visible}
        nodeRef={modalRef}
        timeout={300}
        classNames="my-node"
        unmountOnExit
      >
        <div className="modal-wrapper">
          {/* modal 采用了 fix 布局 */}

          <div className="modal" ref={modalRef}>
            <div className="modal-title">{title || 'modal标题'}</div>
            <div className="modal-content">{content || 'modal内容'}</div>
            <div className="modal-operator">
              <button
                type="button"
                className="modal-operator-cancel"
                onClick={handleCancel}
              >
                取消
              </button>
              <button
                type="button"
                className="modal-operator-confirm"
                onClick={handleConfirm}
              >
                确认
              </button>
            </div>
          </div>
          <div className="mask" onClick={handleMaskClick}></div>
        </div>
      </CSSTransition>
    </>,
    document.body,
  );
}
