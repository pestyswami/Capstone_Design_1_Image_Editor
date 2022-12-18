# Capstone Design 2022-2
# HTML5 Canvas 기반 이미지 편집 온라인 솔루션 개발
Image Editing Online Solution Development based on HTML5 Canvas(영문)  

## Student List
* 고성훈(2017103951, kanaba5@khu.ac.kr)  
* 심건우(2017104001, simkunwo@khu.ac.kr)  
* 이주형(2017104016, trikm11@khu.ac.kr)  
* 주광명(2017104030, rhkdaud268@khu.ac.kr)  

## Overview  
HTML5에서 추가된 Canvas API를 활용해 웹에서 사용할 수 있는 이미지 에디터를 만들고자 한다. 그동안 웹에서는 성능상의 한계로 간단한 이미지 편집 기술만 사용할 수 있는 에디터만 존재했다. Thresholding과 Sharpening등을 활용하여 그림자 제거와 객체 보정 기능이 추가된 이미지 에디터를 만들고, 이를 다운로드 받지 않고 웹에서 바로 사용할 수 있도록 솔루션을 제공하고자 한다.  
  https://imageeditorcapstone.tk/ 왼쪽 링크에서 본 프로젝트의 이미지 에디터를 확인할 수 있다.
  이미지 변환 기능이 제대로 작동하지 않는다면 사이트 설정 > 개인정보 및 보안 > 안전하지 않은 컨텐츠 차단을 허용으로 바꾸면 정상 작동 한다.

## Motivation
  이미지 에디터(Image Editor)는 다양한 이미지 편집 기능을 제공하는 프로그램이다. 이미지 에디터에는 Adobe Photoshop, Microsoft Expression, Pixlr, Paint.NET 등이 있으며 일반적으로 캔버스 사이즈 편집, 오브젝트 클릭 및 선택, 객체별 Layer 나누기, undo / redo 등의 기능을 제공한다.  
    HTML 5 등장 이전에는 웹에서 그래픽을 표현하기가 쉽지 않았다. 웹이 처음 등장했을 때는 문서 위주의 역할을 하였기 때문에 그래픽 표준이 정의되지 않았고 따라서 멀티미디어를 보여주는 데에는 한계가 있었다. 그래서 웹 이미지 에디터에서 사용할 수 있는 이미지 편집 기능이 다양하지 않았고 고도화되지 못했다. Fotor, Canva, PicMokey 등이 그 예시로, 이 웹 이미지 에디터들에서는 밝기 및 명암 조절, 텍스트 추가, 이미지 회전 및 자르기, 필터 효과 주기 등등의 기본적인 이미지 편집 기능만을 제공한다. 간단한 기능 이상의 이미지 편집을 하고 싶을 때는 다른 이미지 에디터 프로그램들을 다운로드 받아 사용해야 했고, 이는 사용자에게 번거로움을 불러왔다.  
  웹에서도 고급 그래픽을 표현하고 싶은 수요 증가에 따라 그래픽을 전문적으로 표현하는 HTML5의 Canvas API가 등장하고 상용화되었다. 덕분에 웹에서도 다양한 그래픽 기술을 처리할 수 있게 되었다.  
  Canvas API는 JavaScript 및 HTML <canvas> 요소를 통해 애니메이션, 게임 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리등의 컴퓨터 그래픽을 그리는 수단을 제공한다.  Canvas API는 주로 2D 그래픽에 사용이 되고, <canvas> 요소를 같이 사용하는 WebGI API는 3D 그래픽에 사용된다. Canvas API는 매우 강력하지만 사용하기 쉽기는 않기 때문에, 라이브러리를 사용하면 프로젝트를 더 빠르고 쉽게 만들 수 있다.  
  HTML5의 Canvas API가 등장함에 따라 웹에서 다양한 그래픽을 표현할 수 있게 되었지만, 그에 걸맞은 웹 이미지 에디터는 아직 나오지 않은 상황이다. 따라서 Canvas API를 응용해 기본적인 이미지 편집 기능을 제공하고 새로운 기능인 그림자 제거 기능과 보정 기능을 제공하는 웹 이미지 에디터를 만들고자 한다.  
  
## Results  
이미지 에디터  
![image](https://user-images.githubusercontent.com/77709696/208286023-a9e79a81-19fb-4481-8c94-4716a652df93.png)  
선 긋기 기능 제공  
![image](https://user-images.githubusercontent.com/77709696/208286037-fc7b3aba-b76d-4356-ae77-bd8e7ef0aa12.png)  
도형 편집 기능 제공  
![image](https://user-images.githubusercontent.com/77709696/208286059-fd00a3bd-8285-4ab5-8661-8d2fbb10ded1.png)  
반전, 픽셀화, 감마 효과 제공

알고리즘  
![image](https://user-images.githubusercontent.com/77709696/208285680-6c32152a-b3dd-4b8e-9de9-12260823d3ed.png)  
배경 사진에 Sharpening효과 적용 비교  
![image](https://user-images.githubusercontent.com/77709696/208285848-cd1f0879-9e0f-4e7b-b293-db8e69882625.png)  
인물 사진에 Sharpening효과 적용 비교  
![image](https://user-images.githubusercontent.com/77709696/208285864-2ee580a8-b5b3-4ddf-91e7-4b8f58d82cce.png)  
인물 사진에 sin 효과 적용 비교  
![image](https://user-images.githubusercontent.com/77709696/208285876-21f24f8a-e138-4fbf-8231-798adbc37d19.png)  
인물 사진에 렌즈 효과 적용 비교  
![image](https://user-images.githubusercontent.com/77709696/208285885-8e0db179-da12-4f62-aedf-ff6e1f98ba5d.png)  
엣지 디텍팅 효과 적용 비교  
![image](https://user-images.githubusercontent.com/77709696/208285909-b88e0c78-f7e5-4dcd-a952-bb46318c60b4.png)  
그림자 제거 효과 적용 비교  

## Conclusion
  HTML의 Canvas API 라이브러리를 활용하여 이미지 자르기, 회전, 대칭 뿐만 아니라 다른 이미지 에디터에서는 볼 수 없는 고급 이미지 보정 기능을 제공하는 이미지 에디터 솔루션을 제공하였다. 단순한 이미지 에디팁 기능을 제공하는 다른 웹 이미지 편집 에디터와 비슷하게 기본적인 편집 기능을 제공하면서도 샤프닝, 블러링, 엣지 디텍팅, 렌즈 효과 등 다른 웹 이미지 편집 에디터는 물론 다운로드받아 사용하거나 유료 요금제를 채택하는 이미지 에디터에서도 보기 힘든 기능을 추가하였다. 따라서 본 프로젝트에서 제공하는 이미지 편집 솔루션은 고유한 기능을 가지고 있어 타 이미지 에디터와 차별점을 둘 수 있을 것으로 기대된다.  
  현재 구현한 이미지 에디터의 기본 기능은 HTML의 Canvas API를 기반으로 한다. 다른 웹 이미지 에디터와 차별점을 둔 본 프로젝트만의 이미지 편집 기능 또한 코드는 직접 구현하였지만 알고리즘은 기존 연구에 기반하는 경향이 있었다. 따라서 향후에 연구를 지속할 수 있다면 본 프로젝트만의 고유한 Drawing 방식을 적용시키거나 새로운 알고리즘을 적용한 고유한 이미지 편집 기능을 추가로 제공해 더더욱 고유한 기능을 제공하는 차별화 둘 수 있는 웹 이미지 에디터로 활용할 수 있을 것이다.
  
## References
[1] Canvas_API : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API  
[2] fabricjs : http://fabricjs.com/docs/  
[3] 정종윤, 박성배 "HTML5 Canvas 기반 오픈소스 이미지 에디터 라이브러리 개발." 한국소프트웨어종합학술대회 논문집 2021.12 (2021): 1318-1320.  
[4] https://skylum.com/ko/creative/best-photo-editing-program  
[5] Thresholding : https://scikit-image.org/docs/stable/auto_examples/applications/plot_thresholding.html  
[6] Laplacian Filter : https://www.charlezz.com/?p=45203  

## Reports
[[LIM]_최종보고서(docx)](https://github.com/pestyswami/Capstone_Design_1_Image_Editor/blob/dev/report/%5BLIM%5DCD1_%EC%B5%9C%EC%A2%85%EB%B3%B4%EA%B3%A0%EC%84%9C.docx)  
[[LIM]_최종보고서(pdf)](https://github.com/pestyswami/Capstone_Design_1_Image_Editor/blob/dev/report/%5BLIM%5DCD1_%EC%B5%9C%EC%A2%85%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf)
