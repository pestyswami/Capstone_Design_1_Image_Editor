# Capstone Design 2022-2
# HTML5 Canvas 기반 이미지 편집 온라인 솔루션 개발
Image Editing Online Solution Development based on HTML5 Canvas(영문)  

## Student List
* 고성훈(2017103951, kanaba5@khu.ac.kr)  
* 심건우(2017104001, simkunwo@khu.ac.kr)  
* 이주형(2017104016, trikm11@khu.ac.kr)  
* 주광명(2017104030, rhkdaud268@khu.ac.kr)  

## Overview  
Canvas API는 웹 브라우저에서 컴퓨터 그래픽을 그리는데 도움을 주는 HTML5의 요소이다.  Canvas API를 직접 사용하기에는 API의 추상화 단계가 낮아 활용이 어렵고, 관련 그래픽스 지식을 학습해야하는 부담이 있다. 따라서 본 연구에서는 Canvas API 기반의 라이브러리를 사용하여 웹 브라우저에서의 이미지 편집 온라인 솔루션을 제공하고자 한다.

## Motivation
Canvas API는 JavaScript 및 HTML <canvas> 요소를 통해 애니메이션, 게임 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리등의 컴퓨터 그래픽을 그리는 수단을 제공한다. 
Canvas API는 주로 2D 그래픽에 사용이 되고, <canvas> 요소를 같이 사용하는 WebGI API는 3D 그래픽에 사용된다. 
Canvas API는 매우 강력하지만 사용하기 쉽기는 않기 때문에, 라이브러리를 사용하면 프로젝트를 더 빠르고 쉽게 만들 수 있다.

## Results

## Conclusion
백엔드 프레임워크는 FastAPI를 사용할 예정이다. FastAPI는 파이썬 3.7 이상 버전을 기반으로 API를 구축하게 해주는 웹 프레임워크이다. NodeJS 및 GO와 동등한 매우 높은 퍼포먼스를 가지며, 가장 빠른 파이썬 프레임워크 중 하나이다. 에디터가 지원되어 직관적이고, 디버깅 시간이 적으며 코드 중복을 최소화해주는 장점이 있다. API에 대한 공개 표준을 기반으로 하고, OpenAPI 및 JsonSchema와 완전히 호환 가능하다.  
사용자 관리 목적으로 데이터베이스를 추가할 예정인데, DB는 MongoDB를 사용할 것이다. MongoDB는 대용량 데이터 저장에 사용되는 문서 지향 NoSQL 데이터베이스이다. 테이블과 행을 사용하는 전통적인 관계형 데이터베이스와는 다르게, MongoDB는 collections와 documents를 사용한다. Collections에는 관계형 데이터베이스에서 테이블과 동일한 역할을 하는 문서와 함수 집합이 포함되어 있고, Doucuments는 MongDB에서 데이터의 기본 단위인 키-값 쌍으로 구성되어 있다.  
서버는 Amazon EC2를 이용해 통신할 예정이다. Amazon EC2는 AWS 클라우드에서 확장 가능한 컴퓨팅 용량을 제공한다. 필요한 만큼 가상 서버를 만들고, 보안 및 네트워킹을 구성하고, 스토리지를 관리할 수 있다. Amazon EC2를 사용하면 확장 또는 축소가 용이하므로 트래픽 예측의 필요성이 줄어든다.  
이미지 저장 등에 사용될 스토리지는 Amazon S3를 사용할 것이다. Amazon S3는 AWS에서 제공하는 온라인 스토리지 웹서비스이다. 데이터 레이크 구축, 데이터 백업 및 복원, 데이터 아카이브, 클라우드 네이티브 애플리케이션 실행 등에 사용할 수 있다. 스토리지 클래스와 사용이 쉬운 관리 기능을 통해 비용을 최적화하고, 데이터를 정리하고, 세분화된 액세스 제어를 구성하여 특정 비즈니스, 조직 및 규정 준수 요구 사항을 충족할 수 있다.  
프론트엔드에 사용할 라이브러리는 Fabric.js이다. Fabric.js는 다른 라이브러리와의 호환성이 높고, 만들어진 요소 하나하나가 객체화 되기 때문에 관리가 편하다.
  
## References

## Reports
