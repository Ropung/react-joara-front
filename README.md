# 조아라 웹소설 플랫폼 프로젝트

<br>

![webnobel_preview](https://github.com/Ropung/integrated-api-workspace/assets/85475762/0a0c64b4-faf5-40cf-8333-4b29bdff9c0a)

<br>

## 팀 구성
노기훈


## 소개
프로젝트는 React, TS, Next13로 구성되었습니다.
스타일의 경우 TailwindCSS, Redix 를 사용하였고 상태관리는 Zustand로 토큰을 로컬 스토리지에서 관리합니다.

<br>

## 문서(Notion)
https://worried-parrotfish-2f5.notion.site/Team-SES-3-8b84882ff38a4535b575e2015e3161f5?pvs=4

<br>

## 기간
1차(04.01~28) 
<br>
2차(06.01 ~30)

<br>

## 🛠사용 기술

React, JS, TS, TailwindCSS, Redix, React Query, React Hooks



<br>

## 프로젝트 구조

- **Docker Compose**로 모든 팀원이 쉽게 로컬 환경 통일
- **Flyway**를 통한 DDL 형상관리
- **도메인 모델/Persistence Entity 구분**
- 멀티 모듈 프로젝트를 통한 **공통 모듈 관리**
- **멀티 모듈 심화**: 어댑터를 모듈로 깔끔하게 구분
- **JDK 17 적용**
- **JWT 인증** 액세스 토큰은 프론트, 리프레시 토큰은 HTTP Only 쿠키와 Redis Repository에 보존
- **JPA Repository**를 통한 영속성 데이터 관리
- **Redis CRUD Repository**를 통한 휘발성 데이터 관리
- **Global Exception Handler**를 통한 예외 처리
- **유지보수 친화**적인 **ErrorCode / Exception** 확장
(복잡도를 낮추면서도 확장성을 높이기 위한 노력)

<br>

## 프로젝트 API 목록

DOC: https://worried-parrotfish-2f5.notion.site/API-2991db75f39b4435aec0a35f73a7d58a?pvs=4

![image](https://github.com/Ropung/integrated-api-workspace/assets/85475762/7eed775e-f006-4030-a984-4a8d958a7802)

<br>

