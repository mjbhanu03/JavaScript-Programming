let name = prompt('Please Enter Your Name');
let user = prompt('Enter S, W or G\nS for Snake, W for Water, G for Gun');
let cpuI = Math.floor(Math.random()) * 3;
let cpu = ['S', 'W', 'G'][cpuI];

const match = (cpu, user) =>
{
    if(cpu === user)
    {
        return 'Nobody. Match is tied';
    }
    else if(cpu === 'S' && user === 'W')
    {
        return 'cpu'
    }
    else if(cpu === 'S' && user === 'G')
    {
        return name;
    }
    else if(cpu === 'G' && user === 'W')
    {
        return name;
    }
    else if(cpu === 'G' && user === 'S')
    {
        return 'cpu'
    }
    else if(cpu === 'W' && user === 'S')
    {
        return name;
    }
    else if(cpu === 'W' && user === 'G')
    {
        return 'cpu'
    }
}
let result = match(cpu, user)

document.write('\nThe winner is: '+ result + '\nCPU Choosed: '+cpu + ' \nYou Choosed: ' + user)
