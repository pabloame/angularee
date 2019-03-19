FROM jboss/wildfly
ADD ./backend/target/angularee.war /opt/jboss/wildfly/standalone/deployments/
