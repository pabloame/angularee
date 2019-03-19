FROM jboss/wildfly:15.0.0.Final
ADD ./backend/target/angularee.war /opt/jboss/wildfly/standalone/deployments/