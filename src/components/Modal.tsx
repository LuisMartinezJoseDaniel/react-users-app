import { FC } from "react";
interface Props {
  children?: React.ReactNode;
  title?: string;
}
export const Modal: FC<Props> = ({ children, title }) => {
  return (
    <div className="abrir-modal animacion fadeIn">
      <div
        className="modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        style={{
          display: "block",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {title}
              </h1>
              {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
