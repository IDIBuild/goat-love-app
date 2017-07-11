node {
    currentBuild.result = "SUCCESS"

    try {

        def buildNumber = env.BUILD_NUMBER
        def branchName = env.BRANCH_NAME
        def workspace = env.WORKSPACE
        def buildUrl = env.BUILD_URL


        stage('Info') {
            echo "workspace directory is $workspace"
            echo "build URL is $buildUrl"
            echo "build Number is $buildNumber"
            echo "branch name is $branchName"
            echo "PATH is $env.PATH"
        }


        stage('Checkout'){
            git pull: true ,url: 'https://github.com/IDIBuild/goat-love-app'
        }

        stage('Test'){
            env.NODE_ENV = "test"

            print "Environment : ${env.NODE_ENV}"

            sh 'node -v'
            sh 'npm prune'
            sh 'npm install'
            sh 'npm test'

            step([$class: 'JUnitResultArchiver', testResults: 'test-results.xml'])
        }

        stage('Build') {
            sh 'gulp webpack'
            archiveArtifacts artifacts: '*.tar.gz', fingerprint: true

        }


        stage('Deploy'){

            echo 'Deploy to Remote Server'
            sh 'ssh root@docker-nginx rm -rf /usr/share/nginx/html/*'
            sh 'scp -r dist/* root@docker-nginx:/usr/share/nginx/html'

        }

    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}