export default class Task {
  constructor({
                id = null,
                title = '',
                status = '',
                difficulty = '',
                due = null,
                done = false,
                subtasks = []
              } = {}) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.difficulty = difficulty;
    this.due = due;
    this.done = done;
    this.subtasks = subtasks.map(sub => ({
      content: sub.content || '',
      done: sub.done || false
    }));
  }

  toFirestore() {
    return {
      title: this.title,
      status: this.status,
      difficulty: this.difficulty,
      due: this.due,
      done: this.done,
      subtasks: this.subtasks
    };
  }

  addSubtask(content) {
    this.subtasks.push({ content, done: false });
  }

  toggleSubtask(index) {
    if (this.subtasks[index]) {
      this.subtasks[index].done = !this.subtasks[index].done;
    }
  }
}
