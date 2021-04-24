import Layout from "../layout/Layout";

import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IFolderParam } from "../types/Folder";

import axios from "axios";
import { API_SERVER } from "../constants";
import GalleryFolderMedia from "./GalleryFolderMedia";
import GalleryFolderMediaTitle from "./GalleryFolderMediaTitle";

const GalleryFolderMedias: React.FC<null> = () => {
  const params: IFolderParam = useParams();

  const [currentPage, setCurrentPage] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [content, setContent] = useState<any>([]);
  const [nextPage, setNextPage] = useState<number>(0);
  const [previousPage, setPreviousPage] = useState<number>(0);

  const dispatchPaginatedData = useCallback(
    (data: any): void => {
      setContent([...content, ...data.content]);
      setHasMore(data.hasMore);
      setNextPage(data.nextPage);
      setPreviousPage(data.prevPage);
      setLoading(false);
    },
    [content]
  );

  const fetchPagedMedias = useCallback(
    (page: number) => {
      axios
        .get(`${API_SERVER}wp-json/api/v1/images/${params.id}?page=${page}`)
        .then((response) => {
          return dispatchPaginatedData(response.data);
        })
        .then(() => setLoading(false))
        .catch((err) => {
          return setError(err);
        });
    },
    [dispatchPaginatedData, params.id]
  );

  useEffect(() => {
    fetchPagedMedias(currentPage);
  }, [currentPage]);

  const handleClick = () => setCurrentPage(Number(currentPage) + 1);

  return (
    <Layout>
      <div className="p-20">
        {loading && (
          <div className="pt-12 flex flex-col items-center sm:h-full sm:w-full">
            <svg
              width="431"
              height="560"
              viewBox="0 0 431 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="loading 1" clip-path="url(#clip0)">
                <g id="all">
                  <path
                    id="Vector"
                    d="M304.755 154.539C304.755 157.729 304.652 160.893 304.445 164.029C303.286 182.12 298.716 199.827 290.975 216.219C290.915 216.359 290.845 216.489 290.786 216.619C290.425 217.379 290.055 218.139 289.675 218.889C287.373 223.525 284.819 228.032 282.025 232.389C269.262 252.392 251.769 268.942 231.091 280.579C210.413 292.216 187.187 298.58 163.465 299.109L164.895 381.349L183.545 371.529L186.875 377.859L165.036 389.359L167.705 542.099L167.735 544.139L153.315 545.349L153.345 545.299L157.885 299.119C138.791 298.845 119.943 294.781 102.433 287.162C84.9228 279.544 69.1007 268.523 55.8851 254.739C54.9754 253.799 54.075 252.829 53.1952 251.869C53.1552 251.829 53.1253 251.789 53.0951 251.759C42.0841 239.751 33.1791 225.971 26.7552 210.999C26.8954 211.159 27.0452 211.309 27.1854 211.469C12.6672 177.519 11.6825 139.302 24.4332 104.649C37.1838 69.9967 62.7043 41.5324 95.765 25.0892C96.265 24.8392 96.7752 24.5992 97.2752 24.3492C129.978 8.59705 167.406 5.70674 202.14 16.2512C236.874 26.7956 266.378 50.0051 284.805 81.2792C285.685 82.7593 286.536 84.2693 287.355 85.7892C298.802 106.895 304.784 130.53 304.755 154.539V154.539Z"
                    fill="#E5E5E5"
                  />
                  <path
                    id="Vector_2"
                    d="M198.285 545.686C222.07 545.686 241.352 526.404 241.352 502.618C241.352 478.833 222.07 459.551 198.285 459.551C174.499 459.551 155.217 478.833 155.217 502.618C155.217 526.404 174.499 545.686 198.285 545.686Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_3"
                    d="M249.186 532.223H210.603V545.306H249.186V532.223Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_4"
                    d="M249.459 545.306C251.717 545.306 253.548 540.425 253.548 534.403C253.548 528.382 251.717 523.5 249.459 523.5C247.201 523.5 245.37 528.382 245.37 534.403C245.37 540.425 247.201 545.306 249.459 545.306Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_5"
                    d="M240.186 531.223H201.603V544.306H240.186V531.223Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_6"
                    d="M240.459 544.306C242.717 544.306 244.548 539.425 244.548 533.403C244.548 527.382 242.717 522.5 240.459 522.5C238.201 522.5 236.37 527.382 236.37 533.403C236.37 539.425 238.201 544.306 240.459 544.306Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_7"
                    d="M156.508 462.567C153.031 446.993 164.147 431.257 181.337 427.418C198.527 423.58 215.281 433.093 218.758 448.667C222.236 464.241 210.843 469.985 193.653 473.823C176.464 477.661 159.986 478.141 156.508 462.567Z"
                    fill="#5EC79B"
                  />
                  <path
                    id="Vector_8"
                    d="M214.837 500.166C212.585 500.212 210.375 499.549 208.52 498.271C206.664 496.992 205.257 495.164 204.498 493.043C204.456 492.918 204.439 492.787 204.448 492.656C204.457 492.525 204.492 492.397 204.55 492.279C204.609 492.162 204.69 492.057 204.789 491.971C204.888 491.884 205.003 491.818 205.127 491.777C205.252 491.735 205.383 491.718 205.514 491.727C205.645 491.736 205.773 491.771 205.891 491.829C206.008 491.888 206.113 491.969 206.2 492.068C206.286 492.167 206.352 492.282 206.394 492.406C207.908 496.914 213.092 499.271 217.948 497.66C220.359 496.874 222.362 495.168 223.521 492.912C224.018 491.94 224.316 490.88 224.4 489.792C224.483 488.704 224.349 487.61 224.006 486.574C223.964 486.45 223.947 486.318 223.956 486.187C223.965 486.056 224 485.928 224.059 485.811C224.117 485.693 224.198 485.588 224.297 485.502C224.396 485.416 224.511 485.35 224.636 485.308C224.76 485.266 224.892 485.249 225.023 485.258C225.154 485.267 225.282 485.302 225.399 485.36C225.517 485.419 225.622 485.5 225.708 485.599C225.794 485.698 225.86 485.813 225.902 485.937C226.33 487.223 226.498 488.58 226.396 489.931C226.294 491.282 225.925 492.599 225.31 493.806C223.913 496.536 221.493 498.604 218.578 499.558C217.371 499.96 216.109 500.165 214.837 500.166V500.166Z"
                    fill="white"
                  />
                  <path
                    id="Vector_9"
                    d="M234.022 506.019C235.178 508.28 235.388 510.907 234.607 513.322C233.827 515.738 232.118 517.745 229.858 518.901C227.597 520.057 224.97 520.267 222.555 519.486C220.139 518.706 218.133 516.997 216.977 514.737L216.968 514.72C214.565 510.011 217.885 507.088 222.594 504.685C227.304 502.283 231.619 501.31 234.022 506.019Z"
                    fill="white"
                  />
                  <path
                    id="Vector_10"
                    d="M387.733 546.074H6.7326C6.46739 546.074 6.21302 545.968 6.02548 545.781C5.83795 545.593 5.7326 545.339 5.7326 545.074C5.7326 544.808 5.83795 544.554 6.02548 544.367C6.21302 544.179 6.46739 544.074 6.7326 544.074H387.733C387.998 544.074 388.252 544.179 388.44 544.367C388.627 544.554 388.733 544.808 388.733 545.074C388.733 545.339 388.627 545.593 388.44 545.781C388.252 545.968 387.998 546.074 387.733 546.074Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_11"
                    d="M188.65 559.633C192.661 558.598 193.241 547.401 189.946 534.624C186.651 521.847 180.728 512.327 176.717 513.362C172.705 514.396 172.125 525.593 175.42 538.37C178.715 551.148 184.639 560.667 188.65 559.633Z"
                    fill="#2F2E41"
                  />
                </g>
                <g id="nap">
                  <path
                    id="Vector_12"
                    d="M260.966 451.278H244.58C244.424 451.278 244.272 451.231 244.143 451.143C244.014 451.054 243.915 450.929 243.859 450.784C243.803 450.638 243.792 450.479 243.828 450.327C243.864 450.175 243.946 450.038 244.061 449.933L258.962 436.438H245.195C244.99 436.438 244.793 436.357 244.648 436.212C244.503 436.067 244.422 435.87 244.422 435.665C244.422 435.46 244.503 435.264 244.648 435.119C244.793 434.974 244.99 434.893 245.195 434.893H260.966C261.122 434.893 261.274 434.94 261.403 435.028C261.532 435.116 261.631 435.242 261.687 435.387C261.743 435.533 261.754 435.692 261.718 435.844C261.682 435.996 261.6 436.133 261.485 436.238L246.585 449.733H260.966C261.171 449.733 261.367 449.814 261.512 449.959C261.657 450.104 261.739 450.301 261.739 450.506C261.739 450.71 261.657 450.907 261.512 451.052C261.367 451.197 261.171 451.278 260.966 451.278V451.278Z"
                    fill="#CBCBCB"
                  />
                  <path
                    id="Vector_13"
                    d="M281.83 427.386H265.444C265.288 427.386 265.136 427.338 265.007 427.25C264.878 427.162 264.779 427.037 264.723 426.891C264.667 426.745 264.656 426.586 264.692 426.434C264.728 426.282 264.81 426.145 264.925 426.04L279.826 412.545H266.059C265.854 412.545 265.657 412.464 265.512 412.319C265.367 412.174 265.286 411.978 265.286 411.773C265.286 411.568 265.367 411.371 265.512 411.226C265.657 411.081 265.854 411 266.059 411H281.83C281.986 411 282.138 411.047 282.267 411.136C282.396 411.224 282.495 411.349 282.551 411.495C282.607 411.64 282.618 411.8 282.582 411.951C282.546 412.103 282.464 412.241 282.349 412.346L267.449 425.84H281.83C282.035 425.84 282.231 425.922 282.376 426.066C282.521 426.211 282.603 426.408 282.603 426.613C282.603 426.818 282.521 427.014 282.376 427.159C282.231 427.304 282.035 427.386 281.83 427.386V427.386Z"
                    fill="#CBCBCB"
                  />
                  <path
                    id="Vector_14"
                    d="M272.557 401.05H256.171C256.015 401.05 255.863 401.003 255.734 400.915C255.605 400.826 255.506 400.701 255.45 400.555C255.394 400.41 255.383 400.25 255.42 400.099C255.456 399.947 255.537 399.809 255.653 399.705L270.553 386.21H256.786C256.581 386.21 256.384 386.129 256.239 385.984C256.095 385.839 256.013 385.642 256.013 385.437C256.013 385.232 256.095 385.036 256.239 384.891C256.384 384.746 256.581 384.664 256.786 384.664H272.557C272.713 384.664 272.866 384.712 272.994 384.8C273.123 384.888 273.222 385.014 273.278 385.159C273.334 385.305 273.345 385.464 273.309 385.616C273.273 385.768 273.192 385.905 273.076 386.01L258.176 399.505H272.557C272.762 399.505 272.959 399.586 273.103 399.731C273.248 399.876 273.33 400.072 273.33 400.277C273.33 400.482 273.248 400.679 273.103 400.824C272.959 400.969 272.762 401.05 272.557 401.05V401.05Z"
                    fill="#CBCBCB"
                  />
                </g>
                <g id="birds">
                  <path
                    id="Vector_15"
                    d="M386.119 177.377L398.914 167.143C388.974 166.047 384.89 171.468 383.219 175.758C375.453 172.534 367 176.76 367 176.76L392.6 186.053C391.309 182.604 389.06 179.594 386.119 177.377V177.377Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_16"
                    d="M16.1192 102.377L28.9141 92.1433C18.9743 91.0467 14.8903 96.4676 13.2188 100.758C5.45349 97.5338 -3 101.76 -3 101.76L22.6001 111.053C21.3086 107.604 19.0605 104.594 16.1192 102.377V102.377Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_17"
                    d="M418.119 45.3768L430.914 35.1433C420.974 34.0467 416.89 39.4676 415.219 43.7583C407.453 40.5339 399 44.7597 399 44.7597L424.6 54.0534C423.309 50.6039 421.06 47.5941 418.119 45.3768Z"
                    fill="#3F3D56"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="430.914" height="559.71" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
        <div className="flex flex-wrap pt-10 min-h-screen">
          <GalleryFolderMediaTitle id={params.id} />
          {content
            ? content.map((item: any, index: number) => (
                <GalleryFolderMedia guid={item.guid} ID={item.ID} key={index} />
              ))
            : null}
        </div>
        {hasMore && (
          <div className="text-center">
            <button
              className="content-center mt-5 text-2xl"
              onClick={handleClick}
            >
              Załaduj więcej
            </button>
          </div>
        )}

        {!hasMore && !loading && (
          <div className="text-center mt-5 text-2xl">Koniec postów</div>
        )}
      </div>
    </Layout>
  );
};

export default GalleryFolderMedias;
