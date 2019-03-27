# Knative Eventing Basics

Demo used in Knative Tech Talk on March 27, 2019.
Recoring to be posted TBD

## Setup services
Install knative serving and eventing

Deploy service event-process and event-display
```
kubectl apply -f serving-event-display.yaml
kubectl apply -f serving-event-process.yaml
```

## Source to Service
Deploy source
```
kubetcl apply -f eventing-cron-service.yaml
```
Check logs with stern
```
stern event-process -c user-container
```

## Source to Channel to Subcription to Service
Deploy channel, source, subscription
```
kubectl apply -f eventing-cron-channel.yaml
```
Check logs with stern
```
stern event-process -c user-container
```

## Clean up
```
kubectl delete -f serving-event-display.yaml
kubectl delete -f serving-event-process.yaml
kubectl delete -f venting-cron-service.yaml
kubectl delete -f eventing-cron-channel.yaml
```
