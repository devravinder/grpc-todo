

# if backend is running in the container...
# docker run -d --name envoy -v $(pwd)/envoy.yaml:/etc/envoy/envoy.yaml -p 9000:9000  envoyproxy/envoy:v1.16-latest  /usr/local/bin/envoy -c /etc/envoy/envoy.yaml --service-cluster grpc_web_proxy_cluster --service-node grpc_web_proxy

# if backend is running outside the container (host machine)... with network mode host
docker run -d --name envoy --network host -v $(pwd)/envoy.yaml:/etc/envoy/envoy.yaml -p 9000:9000  envoyproxy/envoy:v1.16-latest  /usr/local/bin/envoy -c /etc/envoy/envoy.yaml --service-cluster grpc_web_proxy_cluster --service-node grpc_web_proxy