import {projectName, projectType} from "./index";

describe('Starter project should', () => {
  it('output its name', () => {
    expect(projectName()).toEqual('Kata starter project');
  });

  it('output its address', () => {
    expect(projectType()).toEqual('Scrum');
  });
});
