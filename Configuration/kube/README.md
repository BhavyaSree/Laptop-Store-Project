# Deploy to Kubernetes


```
kubectl create deployment laptop --image=bhavyabindela/laptop-store:v0.1 --port 1337
kubectl expose deploy/laptop --name laptop --port=1337
nohup kubectl port-forward svc/laptop 1337 &
open  http://localhost:1337
```

### Cleanup

```
kubectl delete deploy/laptop svc/laptop
```

kubectl run --image tutum/dnsutils dns -it --rm -- bash

dig +search laptop



laptop.default.svc.cluster.local