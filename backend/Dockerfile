FROM openjdk:17

VOLUME /tmp

EXPOSE 8080

ARG JAR_FILE=target/spring-boot-gigs-app.jar

ADD ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]