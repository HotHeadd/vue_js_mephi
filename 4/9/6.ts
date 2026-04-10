// СТРАТЕГИЯ НА ПРИМЕРЕ РАЗНЫХ АТАК У БАШНИ
interface IAttack {
  	hit(enemyHp: number): number;
}

class SingleAttack implements IAttack {
	constructor(private damage: number) {}
	hit(enemyHp: number): number {
		return enemyHp - this.damage;
	}
}

class SplashAttack implements IAttack {
	constructor(private damage: number, private radius: number) {}
	hit(enemyHp: number): number {
		return enemyHp - this.damage * 0.7;
	}
}

class Tower {
    constructor(private attack: IAttack) {}
  
  	setAttack(attack: IAttack): void {
    	this.attack = attack;
  	}
  
  	shoot(enemyHp: number): number {
    	return this.attack.hit(enemyHp);
  	}
}
console.log("СТРАТЕГИЯ")
const cannon = new Tower(new SingleAttack(50));
console.log(cannon.shoot(100));

cannon.setAttack(new SplashAttack(50, 2));
console.log(cannon.shoot(100));

// ОБСЕРВЕР НА ПРИМЕРЕ ПОЛУЧЕНИЯ ВНУТРИИГРОВЫХ ДОСТИЖЕНИЙ ЗА ДЕЙСТВИЯ
type GameEvent =
	| { type: 'kill'; count: number }
	| { type: 'wave'; level: number };

interface IObserver<T> {
	onNotify(event: T): void;
}

interface ISubject<T> {
	subscribe(observer: IObserver<T>): void;
	notify(event: T): void;
}

class GameEventBus implements ISubject<GameEvent> {
	private observers: IObserver<GameEvent>[] = [];

	subscribe(observer: IObserver<GameEvent>): void {
		this.observers.push(observer);
	}

	notify(event: GameEvent): void {
		for (const obs of this.observers) {
		obs.onNotify(event);
		}
	}
}

class AchievementManager implements IObserver<GameEvent> {
	private unlocked: Set<string> = new Set();

	onNotify(event: GameEvent): void {
		if (event.type === 'kill' && event.count >= 10) {
			this.tryUnlock('Sharpshooter', '10 врагов уничтожено');
		}
		if (event.type === 'wave' && event.level >= 5) {
			this.tryUnlock('Survivor', 'Пройдена 5-я волна');
		}
	}

	private tryUnlock(id: string, description: string): void {
		if (!this.unlocked.has(id)) {
			this.unlocked.add(id);
			console.log(`Достижение разблокировано: [${id}] - ${description}`);
		}
	}
}

console.log("НАБЛЮДАТЕЛЬ")
const bus = new GameEventBus();
const achievements = new AchievementManager();

bus.subscribe(achievements);

bus.notify({ type: 'kill', count: 10 });
bus.notify({ type: 'wave', level: 5 });
bus.notify({ type: 'kill', count: 10 });

// АДАПТЕР НА ПРИМЕРЕ С ЗАРЯДКАМИ
interface ICharger {
	chargeUSB(): string;
}

class EuroPlug {
	plugEU(): string {
		return '220V connected';
	}
}

class EUtoUSBAdapter implements ICharger {
	constructor(private euPlug: EuroPlug) {}
	
	chargeUSB(): string {
		const power = this.euPlug.plugEU();
		return `${power} -- USB charged`;
	}
}

console.log("АДАПТЕР")
const socket = new EuroPlug();
const adapter = new EUtoUSBAdapter(socket);

console.log(adapter.chargeUSB());
