export interface expertDesc3Props {
  className: string;
}

export default function ExpertDesc3({ className = "" }: expertDesc3Props) {
  return (
    <div className="box-section-right">
      <div className="social-media">
        <div className="instagram">
          <div className="ellipse-2"></div>
          <svg
            className="instagram2"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5049 6.88477C9.39941 6.88477 6.89453 9.38965 6.89453 12.4951C6.89453 15.6006 9.39941 18.1055 12.5049 18.1055C15.6104 18.1055 18.1152 15.6006 18.1152 12.4951C18.1152 9.38965 15.6104 6.88477 12.5049 6.88477ZM12.5049 16.1426C10.498 16.1426 8.85742 14.5068 8.85742 12.4951C8.85742 10.4834 10.4932 8.84766 12.5049 8.84766C14.5166 8.84766 16.1523 10.4834 16.1523 12.4951C16.1523 14.5068 14.5117 16.1426 12.5049 16.1426ZM19.6533 6.65527C19.6533 7.38281 19.0674 7.96387 18.3447 7.96387C17.6172 7.96387 17.0361 7.37793 17.0361 6.65527C17.0361 5.93262 17.6221 5.34668 18.3447 5.34668C19.0674 5.34668 19.6533 5.93262 19.6533 6.65527ZM23.3691 7.9834C23.2861 6.23047 22.8857 4.67773 21.6016 3.39844C20.3223 2.11914 18.7695 1.71875 17.0166 1.63086C15.21 1.52832 9.79492 1.52832 7.98828 1.63086C6.24023 1.71387 4.6875 2.11426 3.40332 3.39355C2.11914 4.67285 1.72363 6.22559 1.63574 7.97852C1.5332 9.78516 1.5332 15.2002 1.63574 17.0068C1.71875 18.7598 2.11914 20.3125 3.40332 21.5918C4.6875 22.8711 6.23535 23.2715 7.98828 23.3594C9.79492 23.4619 15.21 23.4619 17.0166 23.3594C18.7695 23.2764 20.3223 22.876 21.6016 21.5918C22.8809 20.3125 23.2812 18.7598 23.3691 17.0068C23.4717 15.2002 23.4717 9.79004 23.3691 7.9834ZM21.0352 18.9453C20.6543 19.9023 19.917 20.6396 18.9551 21.0254C17.5146 21.5967 14.0967 21.4648 12.5049 21.4648C10.9131 21.4648 7.49023 21.5918 6.05469 21.0254C5.09766 20.6445 4.36035 19.9072 3.97461 18.9453C3.40332 17.5049 3.53516 14.0869 3.53516 12.4951C3.53516 10.9033 3.4082 7.48047 3.97461 6.04492C4.35547 5.08789 5.09277 4.35059 6.05469 3.96484C7.49512 3.39355 10.9131 3.52539 12.5049 3.52539C14.0967 3.52539 17.5195 3.39844 18.9551 3.96484C19.9121 4.3457 20.6494 5.08301 21.0352 6.04492C21.6064 7.48535 21.4746 10.9033 21.4746 12.4951C21.4746 14.0869 21.6064 17.5098 21.0352 18.9453Z"
              fill="#091156"
            />
          </svg>
        </div>
        <div className="facebook">
          <div className="ellipse-22"></div>
          <svg
            className="facebook-f"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3174 14.0625L19.0117 9.53809H14.6704V6.60205C14.6704 5.36426 15.2769 4.15771 17.2212 4.15771H19.1948V0.305664C19.1948 0.305664 17.4038 0 15.6914 0C12.1162 0 9.7793 2.16699 9.7793 6.08984V9.53809H5.80518V14.0625H9.7793V25H14.6704V14.0625H18.3174Z"
              fill="#091156"
            />
          </svg>
        </div>
        <div className="twitter">
          <div className="ellipse-23"></div>
          <svg
            className="twitter2"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.4302 7.40791C22.446 7.62998 22.446 7.8521 22.446 8.07417C22.446 14.8476 17.2906 22.6522 7.86802 22.6522C4.96509 22.6522 2.26841 21.8114 0 20.3521C0.412451 20.3997 0.808984 20.4155 1.2373 20.4155C3.63257 20.4155 5.83755 19.6065 7.59834 18.2265C5.3458 18.1789 3.45811 16.7036 2.80771 14.6731C3.125 14.7207 3.44224 14.7524 3.77539 14.7524C4.2354 14.7524 4.69546 14.689 5.12373 14.578C2.77603 14.102 1.01519 12.0399 1.01519 9.54941V9.48599C1.69727 9.8667 2.49048 10.1046 3.33115 10.1363C1.95107 9.21626 1.04692 7.64585 1.04692 5.86919C1.04692 4.91743 1.30068 4.04497 1.74487 3.28354C4.26709 6.39268 8.05835 8.4231 12.3096 8.64522C12.2303 8.2645 12.1827 7.86797 12.1827 7.47139C12.1827 4.64775 14.4669 2.34766 17.3064 2.34766C18.7816 2.34766 20.1141 2.96631 21.05 3.96567C22.208 3.7436 23.3184 3.31528 24.302 2.72837C23.9212 3.91812 23.1122 4.91748 22.0494 5.55195C23.0805 5.44097 24.0799 5.15537 24.9999 4.75884C24.302 5.77402 23.4295 6.67817 22.4302 7.40791Z"
              fill="#091156"
            />
          </svg>
        </div>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-ut-aliquam-purus-sit">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit{" "}
      </div>
      <div className="lilly-adams">Lilly Adams </div>
      <div className="stylist-expert">Stylist expert </div>
      <img
        className="unsplash-m-ez-3-po-f-gs-k"
        src="../assets/unsplash_mEZ3PoFGs_k.png"
        alt="avatar2"
      />
    </div>
  );
}
