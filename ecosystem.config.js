module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npm',
      args: 'run-script build && npm run-script start'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-162-36-87.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/portfolio.pem',
      ref: 'origin/master',
      repo: 'git@github.com:maxkerschersantelli/Portfolio.git',
      path: '/home/ubuntu/Portfolio',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}