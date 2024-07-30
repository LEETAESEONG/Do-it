### Do it

- 7/25 navbar 만들고 input 만들다가 일시중지
- 7/26 add btn 만들고 input 95%만듦, get 호출 만들어야함
- 7/27 오후 홈 컴포넌트 만드는 중 60%이상 완료
- 7/27 저녁 디테일 부분 데이터 넘기고 종료
- 7/29 디테일 상단 헤더 만들기 완료
- 7/30 priority 문제 해결
    <details>

  - nav logo에서 `warn-once.js:16 Image with src "/_next/static/media/Size=Large.6588b7c0.png" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.` 라는 문제가 생김
  - 이 경고 메시지는 특정 이미지가 페이지 로딩 시 Largest Contentful Paint (LCP)의 주요 요소로 감지되었음을 의미힌다. LCP는 사용자가 페이지가 로드될 때 시각적으로 표시되는 가장 큰 요소로, 웹 성능을 측정하는 중요한 지표 중 하나다. 따라서, 중요한 이미지를 빠르게 로드하여 사용자 경험을 개선하는 것이 좋다.
  - Next.js에서 next/image 컴포넌트를 사용할 때, 중요한 이미지를 우선적으로 로드하도록 priority 속성을 추가할 수 있다. 이 속성을 사용하면 해당 이미지가 더 빨리 로드되도록 최적화된다.
  - 따라서 nav logo 중 large logo에 priority를 주면서 해결 완료
- 7/30 디테일 페이지 이미지 업로드 기능 추가


### 진행 현황

|          7월 26일           |          7월 27일           |          7월 29일           |
| :-------------------------: | :-------------------------: | :-------------------------: |
| ![image](/records/0726.png) | ![image](/records/0727.png) | ![image](/records/0729.png) |

|          7월 30일           |          7월 30일(2)          |  8월 1일   |
| :-------------------------: | :---------------------------: | :--------: |
| ![image](/records/0730.png) | ![image](/records/0730-2.png) | ![image]() |

### 반응형

|           Desktop           |            Tablet             |            Phone             |
| :-------------------------: | :---------------------------: | :--------------------------: |
| ![image](/records/0727.png) | ![image](/records/tablet.png) | ![image](/records/phone.png) |
