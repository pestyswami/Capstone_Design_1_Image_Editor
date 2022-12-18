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

## Motivation
이미지 에디터(Image Editor)는 다양한 이미지 편집 기능을 제공하는 프로그램이다. 이미지 에디터에는 Adobe Photoshop, Microsoft Expression, Pixlr, Paint.NET 등이 있으며 일반적으로 캔버스 사이즈 편집, 오브젝트 클릭 및 선택, 객체별 Layer 나누기, undo / redo 등의 기능을 제공한다.  
  HTML 5 등장 이전에는 웹에서 그래픽을 표현하기가 쉽지 않았다. 웹이 처음 등장했을 때는 문서 위주의 역할을 하였기 때문에 그래픽 표준이 정의되지 않았고 따라서 멀티미디어를 보여주는 데에는 한계가 있었다. 그래서 웹 이미지 에디터에서 사용할 수 있는 이미지 편집 기능이 다양하지 않았고 고도화되지 못했다. Fotor, Canva, PicMokey 등이 그 예시로, 이 웹 이미지 에디터들에서는 밝기 및 명암 조절, 텍스트 추가, 이미지 회전 및 자르기, 필터 효과 주기 등등의 기본적인 이미지 편집 기능만을 제공한다. 간단한 기능 이상의 이미지 편집을 하고 싶을 때는 다른 이미지 에디터 프로그램들을 다운로드 받아 사용해야 했고, 이는 사용자에게 번거로움을 불러왔다.  
  웹에서도 고급 그래픽을 표현하고 싶은 수요 증가에 따라 그래픽을 전문적으로 표현하는 HTML5의 Canvas API가 등장하고 상용화되었다. 덕분에 웹에서도 다양한 그래픽 기술을 처리할 수 있게 되었다.  
  Canvas API는 JavaScript 및 HTML <canvas> 요소를 통해 애니메이션, 게임 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리등의 컴퓨터 그래픽을 그리는 수단을 제공한다.  Canvas API는 주로 2D 그래픽에 사용이 되고, <canvas> 요소를 같이 사용하는 WebGI API는 3D 그래픽에 사용된다. Canvas API는 매우 강력하지만 사용하기 쉽기는 않기 때문에, 라이브러리를 사용하면 프로젝트를 더 빠르고 쉽게 만들 수 있다.  
  HTML5의 Canvas API가 등장함에 따라 웹에서 다양한 그래픽을 표현할 수 있게 되었지만, 그에 걸맞은 웹 이미지 에디터는 아직 나오지 않은 상황이다. 따라서 Canvas API를 응용해 기본적인 이미지 편집 기능을 제공하고 새로운 기능인 그림자 제거 기능과 보정 기능을 제공하는 웹 이미지 에디터를 만들고자 한다. 
  
## Results

## Conclusion
백엔드 프레임워크는 FastAPI를 사용할 예정이다. FastAPI는 파이썬 3.7 이상 버전을 기반으로 API를 구축하게 해주는 웹 프레임워크이다. NodeJS 및 GO와 동등한 매우 높은 퍼포먼스를 가지며, 가장 빠른 파이썬 프레임워크 중 하나이다. 에디터가 지원되어 직관적이고, 디버깅 시간이 적으며 코드 중복을 최소화해주는 장점이 있다. API에 대한 공개 표준을 기반으로 하고, OpenAPI 및 JsonSchema와 완전히 호환 가능하다.  
사용자 관리 목적으로 데이터베이스를 추가할 예정인데, DB는 MongoDB를 사용할 것이다. MongoDB는 대용량 데이터 저장에 사용되는 문서 지향 NoSQL 데이터베이스이다. 테이블과 행을 사용하는 전통적인 관계형 데이터베이스와는 다르게, MongoDB는 collections와 documents를 사용한다. Collections에는 관계형 데이터베이스에서 테이블과 동일한 역할을 하는 문서와 함수 집합이 포함되어 있고, Doucuments는 MongDB에서 데이터의 기본 단위인 키-값 쌍으로 구성되어 있다.  
서버는 Amazon EC2를 이용해 통신할 예정이다. Amazon EC2는 AWS 클라우드에서 확장 가능한 컴퓨팅 용량을 제공한다. 필요한 만큼 가상 서버를 만들고, 보안 및 네트워킹을 구성하고, 스토리지를 관리할 수 있다. Amazon EC2를 사용하면 확장 또는 축소가 용이하므로 트래픽 예측의 필요성이 줄어든다.  
이미지 저장 등에 사용될 스토리지는 Amazon S3를 사용할 것이다. Amazon S3는 AWS에서 제공하는 온라인 스토리지 웹서비스이다. 데이터 레이크 구축, 데이터 백업 및 복원, 데이터 아카이브, 클라우드 네이티브 애플리케이션 실행 등에 사용할 수 있다. 스토리지 클래스와 사용이 쉬운 관리 기능을 통해 비용을 최적화하고, 데이터를 정리하고, 세분화된 액세스 제어를 구성하여 특정 비즈니스, 조직 및 규정 준수 요구 사항을 충족할 수 있다.  
프론트엔드에 사용할 라이브러리는 Fabric.js이다. Fabric.js는 다른 라이브러리와의 호환성이 높고, 만들어진 요소 하나하나가 객체화 되기 때문에 관리가 편하다.
  
## References

## Reports
[[LIM]_최종보고서(docx)](https://github.com/pestyswami/Capstone_Design_1_Image_Editor/blob/dev/report/%5BLIM%5DCD1_%EC%B5%9C%EC%A2%85%EB%B3%B4%EA%B3%A0%EC%84%9C.docx)  
[[LIM]_최종보고서(pdf)](https://github.com/pestyswami/Capstone_Design_1_Image_Editor/blob/dev/report/%5BLIM%5DCD1_%EC%B5%9C%EC%A2%85%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf)
