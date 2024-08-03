# Do it

> ## 진행 내용

<details>

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
  </details>

- 7/30 디테일 페이지 이미지 업로드 기능 추가
- 7/31 Image 꽉채우는 방법 터득
  <details>

  - next.js의 컴포넌트인 Image가 꽉 차지 않는 문제를 해결
  - Image 컴포넌트의 fill을 true로 바꿔주면서 해결완료
  - 주의 해야할 점
    - alt, src, height, width가 required이기 때문에 하나라도 없으면 error가 나온다. 하지만 fill을 true로 하면 width, height가 없어도 에러가 발생하지 않는다.
  - 참고 사이트 [Next.js Image Component](https://nextjs.org/docs/pages/api-reference/components/image)
  - 추가로 div태그에 radius를 적용했다면 자식 컴포넌트들도 각각 똑같이 적용해야 한다.
  </details>

- 7/31 이미지를 업로드만 가능하고 삭제는 불가능한 것 같아서 X버튼을 만들어서 이미지 없애기를 추가했다.
- 8/1 memo지 부분 만들고 detail 상단에 네임헤더? 태그? 클릭시 isCompleted를 바꿀 수 있게 추가했다.
- 다음에 해야하는 일은
  - 버튼 추가
  - put, delete api 연결
- 8/2 버튼 추가 완료
  - api 연결 및 테스트 필요

</details>

> ## 기획 요구 사항

<details>

### 공통

- 제시된 폰트, 컬러 시스템을 설정해 주세요.
- 재사용성을 위해 공용 컴포넌트를 만들어 주세요.
- 반응형 웹 디자인을 준수해주세요
    - 모바일 레이아웃
    - 태블릿 레이아웃
    - 데스크탑 레이아웃

### 할 일 목록 페이지(`/`)

**목록 조회**

- ‘로고’ 버튼을 클릭하면 ‘/’ 페이지로 이동합니다. (새로고침)
- 진행 중인 할 일과 완료된 할 일을 나누어 볼 수 있습니다.
- 할 일 목록은 무한스크롤로 이어집니다.

**할 일 추가**

- 상단 입력창에 할 일 텍스트를 입력하고 `추가하기` 버튼을 클릭하거나 엔터를 치면 할 일을 새로 생성합니다.

**완료**

- 할 일 항목의 왼쪽 버튼을 클릭하면 체크 표시가가 되면서 완료 상태가 됩니다.

### 할 일 상세 페이지(`/items/{itemId}`)

**할 일 수정**

- 할 일 항목을 클릭한 후 항목 수정이 가능합니다.
- 항목 이름을 수정할 수 있습니다.
- 메모를 추가할 수 있습니다.
- 이미지(최대 1개)를 첨부할 수 있습니다.
    - 이미지 파일 이름은 영어로만 이루어져야 합니다.
    - 파일 크기는 5MB 이하여야 합니다.
- `수정 완료` 버튼을 클릭하면 수정 사항이 반영되고, 할 일 목록 페이지로 이동합니다.

**할 일 삭제**

- `삭제하기` 버튼을 클릭하면 할 일 삭제가 가능하며, 삭제 후 할 일 목록 페이지로 이동합니다.
</details>



> ## 진행 현황

|          7월 26일           |          7월 27일           |          7월 29일           |
| :-------------------------: | :-------------------------: | :-------------------------: |
| ![image](/records/0726.png) | ![image](/records/0727.png) | ![image](/records/0729.png) |

|          7월 30일           |          7월 31일(2)          |          7월 31일           |
| :-------------------------: | :---------------------------: | :-------------------------: |
| ![image](/records/0730.png) | ![image](/records/0730-2.png) | ![image](/records/0731.png) |

|           8월 1일           |       8월 1일( 활성화)        |      8월 2일 (활성화)       |
| :-------------------------: | :---------------------------: | :-------------------------: |
| ![image](/records/0801.png) | ![image](/records/0801-4.png) | ![image](/records/0802.png) |

|      8월 2일 (비활성화)       |  0월 0일   |  0월 0일   |
| :---------------------------: | :--------: | :--------: |
| ![image](/records/0802-4.png) | ![image]() | ![image]() |

## 반응형

> ### Home

|           Desktop           |            Tablet             |            Phone             |
| :-------------------------: | :---------------------------: | :--------------------------: |
| ![image](/records/0727.png) | ![image](/records/tablet.png) | ![image](/records/phone.png) |

> ### Detail

|           Desktop           |            Tablet             |             Phone             |
| :-------------------------: | :---------------------------: | :---------------------------: |
| ![image](/records/0801.png) | ![image](/records/0801-3.png) | ![image](/records/0801-2.png) |

|           Desktop           |            Tablet             |             Phone             |
| :-------------------------: | :---------------------------: | :---------------------------: |
| ![image](/records/0802.png) | ![image](/records/0802-2.png) | ![image](/records/0802-3.png) |
