FROM openjdk:11-jre
COPY target/api-gateway-1.0.0.jar api-gateway.jar
ADD entrypoint.sh entrypoint.sh
CMD [ "entrypoint.sh" ]
ENTRYPOINT ["sh"]