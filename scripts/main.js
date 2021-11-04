var V = BuildVisibility.hidden;

Vars.content.blocks().each(e => {
	var Whitelisted = false;
	
	function wl(b){
		if(e == b) Whitelisted = true;
	}
	
	// Drills
	wl(Blocks.mechanicalDrill);
	wl(Blocks.pneumaticDrill);
	wl(Blocks.waterExtractor);
	
	// Conveyors
	wl(Blocks.conveyor);
	wl(Blocks.titaniumConveyor);
	wl(Blocks.junction);
	wl(Blocks.sorter);
	wl(Blocks.router);
	
	// Liquid
	wl(Blocks.mechanicalPump);
	wl(Blocks.rotaryPump);
	wl(Blocks.conduit);
	wl(Blocks.pulseConduit);
	wl(Blocks.liquidRouter);
	wl(Blocks.liquidJunction);
	wl(Blocks.liquidTank);
	
	// Industrial Machines
	wl(Blocks.graphitePress);
	wl(Blocks.siliconSmelter);
	wl(Blocks.kiln);
	wl(Blocks.pulverizer);
	wl(Blocks.melter);
	wl(Blocks.separator);
	wl(Blocks.cryofluidMixer);
	wl(Blocks.incinerator);
	
	
	// Turrets
	wl(Blocks.duo);
	wl(Blocks.scatter);
	wl(Blocks.arc);
	wl(Blocks.lancer)
	wl(Blocks.scorch);
	wl(Blocks.salvo);
	
	// Defense
	wl(Blocks.copperWall);
	wl(Blocks.copperWallLarge);
	wl(Blocks.titaniumWall);
	wl(Blocks.titaniumWallLarge);
	
	// Unit
	wl(Blocks.commandCenter);
	wl(Blocks.repairPoint);
	wl(Blocks.groundFactory);
	wl(Blocks.airFactory);
	wl(Blocks.navalFactory);
	wl(Blocks.additiveReconstructor);
	wl(Blocks.multiplicativeReconstructor);
	
	// Power
	wl(Blocks.powerNode);
	wl(Blocks.powerNodeLarge);
	wl(Blocks.combustionGenerator);
	wl(Blocks.solarPanel);
	wl(Blocks.steamGenerator);
	wl(Blocks.battery);
	wl(Blocks.batteryLarge);
	wl(Blocks.thermalGenerator);
	
	// Misc
	wl(Blocks.container);
	wl(Blocks.shockMine);
	wl(Blocks.mender);
	wl(Blocks.mendProjector);
	wl(Blocks.overdriveProjector);
	wl(Blocks.coreFoundation);
	
	// Logic
	wl(Blocks.message);
	
	// Campaign
	wl(Blocks.launchPad);
	
	// Lighting
	wl(Blocks.illuminator);
	
	// Sandbox
	wl(Blocks.itemSource);
	wl(Blocks.itemVoid);
	wl(Blocks.liquidSource);
	wl(Blocks.liquidVoid);
	wl(Blocks.powerSource);
	wl(Blocks.powerVoid);
	
	if(!Whitelisted) e.buildVisibility = V;
})
