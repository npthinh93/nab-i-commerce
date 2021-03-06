FROM openjdk:11-jre
VOLUME /tmp
COPY config/* /config/
COPY target/config-service-1.0.0.jar config-service.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","config-service.jar"]
