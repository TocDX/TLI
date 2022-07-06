# Git 버전관리

### 버전관리의 정의

- 분산 버전 관리 시스템
1. 버전이란 컴퓨터 소프트웨어의 특정 상태를 말한다.
2. 일반적인 우리가 하는 버전 관리는 _1차, _2차, _최종 등 문서 작업을 할때의 보편적인 
버전관리라 할 수 있다

<aside>
💡 이런식으로 버전 관리를 하게 되면 바뀐게 무엇인지 차이를 알기 힘들다!

</aside>

### 버전관리를 하는 이유

- 차이와 수정 이유를 메시지로 남길 수 있다
- 뼈대 코드 구성, 메인 기능 구현 로그인 기능 구현 등
현재 파일들을 안전한 상태로 과거 모습 그대로 복원이 가능하다(반대로도 마찬가지)

<aside>
💡 즉 버전관리, 소스코드 관리란 동일한 정보에 대한 여러 버전을 관리하는 것을 말한다.

</aside>

### Git이란?

- Git은 분산버전관리시스템으로 코드의 버전을 관리하는 도구
- 2005년 리눅스 커널을 위한 도구로 리누스 토르발스가 개발
- 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율

### 분산버전관리시스템(DVCS)

- 중앙집중식버전관리시스템은 중앙에서 버전을 관리하고 파일을 받아서 사용
- 분산버전관리시스템은 원격 저장소(remote repository)를 통하여 협업하고,
모든 히스토리를 클라이언트들이 공유를 한다.

### 저장소를 만들고 기본 명령어를 써보자

- $ git init
  
    특정 폴더를 git 저장소(repository)를 만들어 git으로 관리
    
    .git 폴더가 생성되며 git bash에서는 (master)라는 표기를 확인할 수 있음
    

![Untitled 19](./Git%20%EB%B2%84%EC%A0%84%EA%B4%80%EB%A6%AC%20.assets/Untitled%2018.png)

![Untitled 18](./Git%20%EB%B2%84%EC%A0%84%EA%B4%80%EB%A6%AC%20.assets/Untitled%2019.png)

<aside>
💡 git init로 git 저장소를 만들어준다
</aside>

- $ git add<file>
  
    working directory상의 변경 내용을 staging area에 추가하기 위해 사용
    untracked 상태의 파일을 staged로 변경,
    modified 상태의 파일을 staged로 변경.
    

```python
Wow@DESKTOP-GHSCJQG MINGW64 ~/Desktop/새 폴더/수업 자료 정리 (master)
$ git status
On branch master

No commits yet  
# 트래킹이 되지 않는 파일이고 git으로 한번도 관리되지 않는 파일입니다
# 그러기에 커밋을 하려면 파일을 add를 해야한다
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        1.txt

nothing added to commit but untracked files present (use "git add" to track)
# 커밋을 할 수 있는게 없기에 add를 통해 파일을 트래킹을 해야한다

$ git add 1.txt
#add 후 커밋 staging Area에 임시저장이 된다
Wow@DESKTOP-GHSCJQG MINGW64 ~/Desktop/새 폴더/수업 자료 정리 (master)        
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   1.txt
```

- $ git commit -m <’커밋메시지’>
  
    staged 상태의 파일들을 커밋을 통해 버전으로 기록
    
    SHA-1 해시를 사용하여 40자 길이의 체크섬을 생성하고, 이를 통해 고유한 커밋을 표기
    
    커밋 메시지는 변경 사항을 나타낼 수 있도록 명확하게 작성해야 함
    

```python
$ git commit -m "1 커밋완료"
[master (root-commit) bd1a0e9] 1 커밋완료
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 1.txt
# 메시지와 함께 커밋을 한다
Wow@DESKTOP-GHSCJQG MINGW64 ~/Desktop/새 폴더/수업 자료 정리 (master)
$ git log
commit bd1a0e9a7c34568b827ea4d63d80faf1621b8b42 (HEAD -> master)
Author: TocDX <sk372021000@gmail.com>
Date:   Tue Jul 5 22:22:09 2022 +0900

    1 커밋완료
#커밋 후 $git log로 커밋이 된 걸 확인한다 
```